import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/shopReducer";
import { userReducer } from "./slices/userReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    shopItems: itemsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
