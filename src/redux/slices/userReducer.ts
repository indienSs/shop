import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type UserType = {
  userName: string;
};

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

export const userSelector = (store: RootState) => store.user.userName;

export const userReducer = userSlice.reducer;
