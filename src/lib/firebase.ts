import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

export const firebaseConfig = {
  apiKey: "AIzaSyCfqqCSy_NHMbBQ-OQfFS7xwFkHh8QKqM4",
  authDomain: "vrar-a6aa2.firebaseapp.com",
  projectId: "vrar-a6aa2",
  storageBucket: "vrar-a6aa2.firebasestorage.app",
  messagingSenderId: "403824668186",
  appId: "1:403824668186:web:3fa8018e02fef0e39aeba3",
  measurementId: "G-GFHHVLJ3QK"
};





const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
