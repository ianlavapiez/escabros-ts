import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

import { logout, signIn } from "./authThunks";

export type AuthState = {
  error: string | null;
  loading: boolean;
  user: User | null;
};

const initialState: AuthState = {
  error: null,
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.error = null;
        state.loading = false;
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
        state.user = payload;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.error = payload?.message ?? null;
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;

export default authSlice;
