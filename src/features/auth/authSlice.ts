import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

import { AppDispatch } from "app/store";

import { logout, signIn } from "./authThunks";

type AuthState = {
  error: string | null;
  loading: boolean;
  successMessage: string | null;
  user: User | null;
};

const initialState: AuthState = {
  error: null,
  loading: false,
  successMessage: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
        state.successMessage = "Successfully logged out.";
        state.user = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload?.message ?? null;
        state.loading = false;
      })
      .addCase(signIn.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.successMessage = "Successfully logged in.";
        state.user = payload;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.error = payload?.message ?? null;
        state.loading = false;
      });
  },
});

export const clearSuccessMessage = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(setSuccessMessage(null));
  }, 4000);
};

export const { setSuccessMessage } = authSlice.actions;
export const authReducer = authSlice.reducer;

export default authSlice;
