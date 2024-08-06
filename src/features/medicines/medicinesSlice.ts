import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "app/store";
import { Medicine } from "types/medicines";

import {
  addMedicine,
  deleteMedicine,
  fetchMedicines,
  updateMedicine,
} from "./medicinesThunks";

type MedicineState = {
  error: string | null;
  loading: boolean;
  entities: Medicine[];
  successMessage: string | null;
};

const initialState: MedicineState = {
  entities: [],
  error: null,
  loading: false,
  successMessage: null,
};

const medicinesSlice = createSlice({
  name: "medicines",
  initialState,
  reducers: {
    setSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedicines.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchMedicines.fulfilled, (state, { payload }) => {
        state.entities = payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchMedicines.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to fetch medicines.";
        state.loading = false;
      })
      .addCase(addMedicine.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addMedicine.fulfilled, (state, { payload }) => {
        state.entities.push(payload);
        state.error = null;
        state.loading = false;
        state.successMessage = "Successfully added new medicine details.";
      })
      .addCase(addMedicine.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to add medicine details.";
        state.loading = false;
      })
      .addCase(updateMedicine.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateMedicine.fulfilled, (state, { payload }) => {
        const index = state.entities.findIndex(
          (medicine) => medicine.id === payload.id
        );

        if (index !== -1) {
          state.entities[index] = payload;
          state.error = null;
          state.loading = false;
          state.successMessage =
            "Successfully updated the selected medicine details.";
        }
      })
      .addCase(updateMedicine.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to update medicine details.";
        state.loading = false;
      })
      .addCase(deleteMedicine.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteMedicine.fulfilled, (state, { payload }) => {
        state.entities = state.entities.filter(
          (medicine) => medicine.id !== payload
        );
        state.error = null;
        state.loading = false;
        state.successMessage =
          "Successfully deleted the selected medicine details.";
      })
      .addCase(deleteMedicine.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to delete medicine details.";
        state.loading = false;
      });
  },
});

export const clearSuccessMessage = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(setSuccessMessage(null));
  }, 2000);
};

export const { setSuccessMessage } = medicinesSlice.actions;
export const medicinesReducer = medicinesSlice.reducer;

export default medicinesSlice;
