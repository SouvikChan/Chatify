import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwzsVAVaW3YVRfPtT-U1SSigyocwwQ9d4",
  authDomain: "balchat-40772.firebaseapp.com",
  projectId: "balchat-40772",
  storageBucket: "balchat-40772.appspot.com",
  messagingSenderId: "961564501190",
  appId: "1:961564501190:web:e15419aa8b8e22bbb7a3c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
