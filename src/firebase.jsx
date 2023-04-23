// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC954XH-n-UVVfMZMTe7bJSxXJ3gem_avE",
  authDomain: "chatapp-6d698.firebaseapp.com",
  projectId: "chatapp-6d698",
  storageBucket: "chatapp-6d698.appspot.com",
  messagingSenderId: "605013020085",
  appId: "1:605013020085:web:7b66fdcd9a9bbc8ef3ddfc",
  measurementId: "G-R38NP48XLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app)