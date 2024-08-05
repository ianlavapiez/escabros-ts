import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "features/auth/authSlice";
import { medicinesReducer } from "features/medicines/medicinesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    medicines: medicinesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
