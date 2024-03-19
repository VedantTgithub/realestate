// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf84lt2ojt18Qyx5t2zzgtQbelYgBRABU",
  authDomain: "mern-estate-f94cd.firebaseapp.com",
  projectId: "mern-estate-f94cd",
  storageBucket: "mern-estate-f94cd.appspot.com",
  messagingSenderId: "217473115970",
  appId: "1:217473115970:web:48e1531849a50d13ba4adb",
  measurementId: "G-Q5T3SYXDXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);