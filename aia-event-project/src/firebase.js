// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClTTwSZmA0-Zf2_3ihpl4XEhosDciBrUM",
  authDomain: "aia-project-auth-development.firebaseapp.com",
  projectId: "aia-project-auth-development",
  storageBucket: "aia-project-auth-development.appspot.com",
  messagingSenderId: "559132296349",
  appId: "1:559132296349:web:8a45da6f6a92ef9ca18074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();