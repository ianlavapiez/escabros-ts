import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCoKgtY7n2TBk4lEawAH9WqfhWZGojz7bU",
  authDomain: "escabros-pharmacy.firebaseapp.com",
  projectId: "escabros-pharmacy",
  storageBucket: "escabros-pharmacy.appspot.com",
  messagingSenderId: "538001192028",
  appId: "1:538001192028:web:242f47db26ab6c5a586299",
  measurementId: "G-T48K7ZCCBR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
