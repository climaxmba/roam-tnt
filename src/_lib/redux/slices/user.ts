import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "../../modules/storage";

type UserState = {
  details: {
    userName: string;
    email: string;
    phone: string;
  };
  booking: PackageItem | null;
};

const initialState: UserState = {
  details: storage.getUser(),
  booking: storage.getBooking() || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (
      state,
      action: PayloadAction<typeof initialState.details>
    ) => {
      const newUser = action.payload;
      state.details = newUser;
      storage.setUser(newUser);
    },
    setBooking: (state, action: PayloadAction<PackageItem>) => {
      state.booking = action.payload;
      storage.setBooking(action.payload);
    },
    clearBooking: (state) => {
      state.details = initialState.details;
      storage.clearBooking();
    },
  },
});

export default userSlice;
