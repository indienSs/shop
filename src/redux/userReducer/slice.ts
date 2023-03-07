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
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    removeUserName: (state) => {
      state.userName = "";
    },
  },
});

export const { setUserName, removeUserName } = userSlice.actions;

export default userSlice.reducer;
