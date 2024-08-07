import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  account: {
    userName: string;
    email: string;
    phone: string;
  };
  favourites: PackageItem[] | []
}

const initialState: UserState = {
  account: {
    userName: "",
    email: "",
    phone: "",
  },
  favourites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<typeof initialState.account>) => {
      const newUser = action.payload;
      state.account = newUser;
    },
    logout: (state) => {
      state.account = initialState.account;
    },
    addToFavourites: (state, action) => {
      const favouritesCopy: PackageItem[] = [...state.favourites];
      const item = action.payload;

      favouritesCopy.every((elem) => elem.id !== item.id) &&
        favouritesCopy.push(item);

      state.favourites = favouritesCopy as never[];
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (fav: PackageItem) => fav.id !== action.payload
      );
    },
  },
});

export default userSlice;
