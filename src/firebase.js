// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC2NEFSAkQYWZvOAiKe_RWP7y3u5Ddcn1A",
  authDomain: "hola9-e8361.firebaseapp.com",
  projectId: "hola9-e8361",
  storageBucket: "hola9-e8361.appspot.com",
  messagingSenderId: "1033170719336",
  appId: "1:1033170719336:web:5f977d328f0be2b96921dd",
  measurementId: "G-JNKNDVQZ64",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
