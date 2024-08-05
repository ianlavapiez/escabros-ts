import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "firebase/config";
import { signInWithEmailAndPassword, signOut, User } from "firebase/auth";

import { Login } from "types/auth";
import { RejectError } from "types/reject";
import { parseErrorMessage } from "utils/parseError";

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: RejectError }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    await signOut(auth);
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});

export const signIn = createAsyncThunk<
  User,
  Login,
  { rejectValue: RejectError }
>("auth/signIn", async ({ email, password }: Login, { rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});
