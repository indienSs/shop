import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopType } from "./types";
import { ShopItem } from "../../types/shopTypes";

const initialState: ShopType = {
  items: [],
};

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
});

export const { setItems, setFavoriteItem, setCartItem } = itemsSlice.actions;

export default itemsSlice.reducer;
