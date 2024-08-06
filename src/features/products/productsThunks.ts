import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "firebase/config";
import { Product } from "types/products";
import { RejectError } from "types/reject";
import { parseErrorMessage } from "utils/parseError";

export const addProduct = createAsyncThunk<
  Product,
  Omit<Product, "id">,
  { rejectValue: RejectError }
>("products/addProduct", async (product, { rejectWithValue }) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);

    return { id: docRef.id, ...product };
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});

export const deleteProduct = createAsyncThunk<
  string,
  string,
  { rejectValue: RejectError }
>("products/deleteProduct", async (id, { rejectWithValue }) => {
  try {
    await deleteDoc(doc(db, "products", id));

    return id;
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: RejectError }
>("products/fetchProducts", async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
});

export const updateProduct = createAsyncThunk<
  Product,
  Product,
  { rejectValue: RejectError }
>("products/updateProduct", async (product, { rejectWithValue }) => {
  try {
    const { id, ...data } = product;

    await updateDoc(doc(db, "products", id), data);

    return product;
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});
