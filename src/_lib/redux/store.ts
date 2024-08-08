import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user";
import favouritesSlice from "./slices/favourites";

export const { setUserDetails, setBooking, clearBooking } = userSlice.actions;
export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    favourites: favouritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
