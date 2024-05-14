// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-MelVAFsCzHG7GFe8sTTouYHXrN52J84",
  authDomain: "mern-estate-5a966.firebaseapp.com",
  projectId: "mern-estate-5a966",
  storageBucket: "mern-estate-5a966.appspot.com",
  messagingSenderId: "1047783946829",
  appId: "1:1047783946829:web:34b1700269a4f32a2bba04",
  measurementId: "G-PE3WP738E4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);