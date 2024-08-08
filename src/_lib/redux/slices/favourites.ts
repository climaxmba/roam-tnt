import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "../../modules/storage";

type Favourites = {
  value: PackageItem[] | [];
};

const initialState: Favourites = {
  value: storage.getFavourites(),
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<PackageItem>) => {
      const favouritesCopy = [...state.value];
      const item = action.payload;

      favouritesCopy.every((elem) => elem.id !== item.id) &&
        favouritesCopy.push(item);

      state.value = favouritesCopy;
      storage.setFavourites(favouritesCopy);
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      const newState = state.value.filter((fav) => fav.id !== action.payload);
      state.value = newState;
      storage.setFavourites(newState);
    },
  },
});

export default favouritesSlice;
