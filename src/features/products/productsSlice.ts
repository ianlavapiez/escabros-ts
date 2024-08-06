import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "app/store";
import { Product } from "types/products";

import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "./productsThunks";

type ProductState = {
  error: string | null;
  loading: boolean;
  entities: Product[];
  successMessage: string | null;
};

const initialState: ProductState = {
  entities: [],
  error: null,
  loading: false,
  successMessage: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSuccessMessage: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.entities = payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to fetch products.";
        state.loading = false;
      })
      .addCase(addProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.entities.push(payload);
        state.error = null;
        state.loading = false;
        state.successMessage = "Successfully added new product details.";
      })
      .addCase(addProduct.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to add product details.";
        state.loading = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        const index = state.entities.findIndex(
          (medicine) => medicine.id === payload.id
        );

        if (index !== -1) {
          state.entities[index] = payload;
          state.error = null;
          state.loading = false;
          state.successMessage =
            "Successfully updated the selected product details.";
        }
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to update product details.";
        state.loading = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.entities = state.entities.filter(
          (medicine) => medicine.id !== payload
        );
        state.error = null;
        state.loading = false;
        state.successMessage =
          "Successfully deleted the selected product details.";
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.error = payload?.message || "Failed to delete product details.";
        state.loading = false;
      });
  },
});

export const clearSuccessMessage = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(setSuccessMessage(null));
  }, 2000);
};

export const { setSuccessMessage } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

export default productsSlice;
