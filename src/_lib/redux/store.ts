import { configureStore } from "@reduxjs/toolkit";

import bookingSlice from "./slices/booking";
import favouritesSlice from "./slices/favourites";

export const { login, logout } = bookingSlice.actions;
export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;

export const store = configureStore({
  reducer: {
    user: bookingSlice.reducer,
    favourites: favouritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
