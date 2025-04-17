//Setting up Firebase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCm833nz4mA3d0NpS5XKDqAmEnkH5QFzZ8",
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