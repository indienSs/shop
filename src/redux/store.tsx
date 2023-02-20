import { configureStore } from "@reduxjs/toolkit";
import shopItems from "./reducers/itemsSlice"
import likedItems from "./reducers/likedSlice";

const store = configureStore({
  reducer: {
    shopItems: shopItems,
    likedItems: likedItems
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
