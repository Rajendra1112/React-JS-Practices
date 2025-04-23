// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAic0n9vWbvvEMxgxKpnaKfCjrTm3ReyVk",
  authDomain: "vite-contact-ce817.firebaseapp.com",
  projectId: "vite-contact-ce817",
  storageBucket: "vite-contact-ce817.firebasestorage.app",
  messagingSenderId: "766788352920",
  appId: "1:766788352920:web:9c8b1ad3f46a9dc29e49ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
