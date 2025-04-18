// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYOqk5012gqgAPyPJjKgVi4DGAVnBSXo",
  authDomain: "hat-bazar-f88e5.firebaseapp.com",
  projectId: "hat-bazar-f88e5",
  storageBucket: "hat-bazar-f88e5.firebasestorage.app",
  messagingSenderId: "1038549285217",
  appId: "1:1038549285217:web:20544660884bab9c6e6d20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
