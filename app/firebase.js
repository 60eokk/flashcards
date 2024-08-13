// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwqfBO9tEWNRNQ76vH-z_O5U5No8TM_-4",
  authDomain: "flashcards-5df10.firebaseapp.com",
  projectId: "flashcards-5df10",
  storageBucket: "flashcards-5df10.appspot.com",
  messagingSenderId: "793128649391",
  appId: "1:793128649391:web:7703ea43f3a0ad4b9e0a5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;