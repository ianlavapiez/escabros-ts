import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase/config";
import { signInWithEmailAndPassword, signOut, User } from "firebase/auth";

import { Login } from "types/auth";

type AuthError = {
  message: string;
};

export const logout = createAsyncThunk<void, void, { rejectValue: AuthError }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (err) {
      return rejectWithValue({ message: (err as Error).message });
    }
  }
);

export const signIn = createAsyncThunk<User, Login, { rejectValue: AuthError }>(
  "auth/signIn",
  async ({ email, password }: Login, { rejectWithValue }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      return user;
    } catch (err) {
      return rejectWithValue({ message: (err as Error).message });
    }
  }
);
