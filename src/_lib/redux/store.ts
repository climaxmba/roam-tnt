import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user";

export const { login, logout, addToFavourites, removeFromFavourites } =
  userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
