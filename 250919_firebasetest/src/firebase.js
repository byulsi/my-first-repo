// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzNdsMIpaV7m9QGL_6BLPmq41alBDssgQ",
  authDomain: "my-diary-app-401c7.firebaseapp.com",
  projectId: "my-diary-app-401c7",
  storageBucket: "my-diary-app-401c7.firebasestorage.app",
  messagingSenderId: "153506498586",
  appId: "1:153506498586:web:73a451eae864dfd66ce9a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
