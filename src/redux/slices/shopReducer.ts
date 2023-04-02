import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopItem } from "../../types/shopTypes";
import { RootState } from "../store";
import axios from "axios";

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

type ShopType = {
  items: ShopItem[];
  status: Status;
};

const initialState: ShopType = {
  items: [],
  status: Status.LOADING,
};

export const fetchItems = createAsyncThunk("shopItems/fetchItems", async () => {
  const { data } = await axios.get<ShopItem[]>(
    "https://63c7e988e52516043f472858.mockapi.io/shop_items"
  );
  return data;
});

export const itemsSlice = createSlice({
  name: "shopItems",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<ShopItem[]>) => {
      state.items = action.payload;
    },
    setFavoriteItem: (state, action: PayloadAction<ShopItem>) => {
      state.items.forEach((obj) =>
        obj.id === action.payload.id
          ? (obj.favorite = !obj.favorite)
          : (obj.favorite = obj.favorite)
      );
    },
    setCartItem: (state, action: PayloadAction<ShopItem>) => {
      state.items.forEach((obj) =>
        obj.id === action.payload.id
          ? (obj.cart = !obj.cart)
          : (obj.cart = obj.cart)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(
      fetchItems.fulfilled,
      (state, action: PayloadAction<ShopItem[]>) => {
        state.status = Status.SUCCESS;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, setFavoriteItem, setCartItem } = itemsSlice.actions;

export const shopItemsSelector = (store: RootState) => store.shopItems.items;
export const statusSelector = (store: RootState) => store.shopItems.status;

export const itemsReducer = itemsSlice.reducer;
