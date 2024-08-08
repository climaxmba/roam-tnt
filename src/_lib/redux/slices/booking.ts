import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  account: {
    userName: string;
    email: string;
    phone: string;
  };
};

const initialState: UserState = {
  account: {
    userName: "",
    email: "",
    phone: "",
  },
};

const bookingSlice = createSlice({
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
  },
});

export default bookingSlice;
