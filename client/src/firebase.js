// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "easycollect-naresh.firebaseapp.com",
  projectId: "easycollect-naresh",
  storageBucket: "easycollect-naresh.appspot.com",
  messagingSenderId: "469706124296",
  appId: "1:469706124296:web:99e75327e2721fcf3cb5bd",
  measurementId: "G-DNDE4N5CD8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
