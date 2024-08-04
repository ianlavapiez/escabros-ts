import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
