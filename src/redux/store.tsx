import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./shopReducer/slice";
import userSlice from "./userReducer/slice";

const store = configureStore({
  reducer: {
    shopItems: itemsSlice,
    user: userSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
