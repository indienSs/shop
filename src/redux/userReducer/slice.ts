import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShopItem } from "../../types/shopTypes";
import { UserType } from "./types";

const initialState: UserType = {
  userName: "",
};

export const userSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    removeUser: (state) => {
      state.userName = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
