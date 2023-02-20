import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShopItem } from "../../@types/shopTypes";

interface ItemsSlice {
  shopItems: ShopItem[];
}

const initialState: ItemsSlice = { shopItems: [] };

const itemsSlice = createSlice({
  name: "shopItems",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ShopItem>) {
      state.shopItems.push(action.payload);
    },
    removeItem(state, action: PayloadAction<ShopItem>) {
      state.shopItems = state.shopItems.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
