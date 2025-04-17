//Setting up Firebase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "//AlP81JnPAaJ0j91akPeq9hN8L8v64Ftp0nKLyn//",
  authDomain: "taskmanager-75373.firebaseapp.com",
  projectId: "taskmanager-75373",
  storageBucket: "taskmanager-75373.appspot.com",
  messagingSenderId: "458020891534",
  appId: "1:458020891534:web:6d6f95a609886e73bd92df",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const db = getFirestore(app);
export default app;
