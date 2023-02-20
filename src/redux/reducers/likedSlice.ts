import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ShopItem } from "../../@types/shopTypes";

interface LikedSlice {
  likedItems: ShopItem[];
}

const initialState: LikedSlice = { likedItems: [] };

const likedSlice = createSlice({
  name: "likedItems",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ShopItem>) {
      state.likedItems.push(action.payload);
    },
    removeItem(state, action: PayloadAction<ShopItem>) {
      state.likedItems = state.likedItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItem, removeItem } = likedSlice.actions;
export default likedSlice.reducer;
