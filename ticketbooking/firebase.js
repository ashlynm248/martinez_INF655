import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDIeO0YCSbCMf4qgRZ7DpHKI0LqLJN7oM0",
  authDomain: "ticket-booking-6bb6e.firebaseapp.com",
  projectId: "ticket-booking-6bb6e",
  storageBucket: "ticket-booking-6bb6e.firebasestorage.app",
  messagingSenderId: "20835049845",
  appId: "1:20835049845:web:f1b18887c6f3755de2b33c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
