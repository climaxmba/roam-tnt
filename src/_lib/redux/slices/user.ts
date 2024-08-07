import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {
    userName: "",
    email: "",
    phone: "",
  },
  favourites: [
    {
      id: "1",
      image: "",
      title: "",
      location: "",
      hotelNightsCount: 0,
      toursCount: 0,
      rating: 1,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const newUser = action.payload;
      state.account = newUser;
    },
    logout: (state) => {
      state.account = initialState.account;
    },
    addToFavourites: (state, action) => {
      const favouritesCopy = [...state.favourites];
      const item = action.payload;

      favouritesCopy.every((elem) => elem.id !== item.id) &&
        favouritesCopy.push(item);

      state.favourites = favouritesCopy;
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (fav) => fav.id !== action.payload
      );
    },
  },
});

export default userSlice;
