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
import { Medicine } from "types/medicines";
import { RejectError } from "types/reject";
import { parseErrorMessage } from "utils/parseError";

export const addMedicine = createAsyncThunk<
  Medicine,
  Omit<Medicine, "id">,
  { rejectValue: RejectError }
>("medicines/addMedicine", async (medicine, { rejectWithValue }) => {
  try {
    const docRef = await addDoc(collection(db, "medicines"), medicine);

    return { id: docRef.id, ...medicine };
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});

export const deleteMedicine = createAsyncThunk<
  string,
  string,
  { rejectValue: RejectError }
>("medicines/deleteMedicine", async (id, { rejectWithValue }) => {
  try {
    await deleteDoc(doc(db, "medicines", id));

    return id;
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});

export const fetchMedicines = createAsyncThunk<
  Medicine[],
  void,
  { rejectValue: RejectError }
>("medicines/fetchMedicines", async () => {
  const querySnapshot = await getDocs(collection(db, "medicines"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Medicine[];
});

export const updateMedicine = createAsyncThunk<
  Medicine,
  Medicine,
  { rejectValue: RejectError }
>("medicines/updateMedicine", async (medicine, { rejectWithValue }) => {
  try {
    const { id, ...data } = medicine;

    await updateDoc(doc(db, "medicines", id), data);

    return medicine;
  } catch (err) {
    return rejectWithValue({ message: parseErrorMessage(err) });
  }
});
