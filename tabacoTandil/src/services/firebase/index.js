// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFUSXtM_5HPF8p7MfbyGsVyQMxvZ7PuNw",
  authDomain: "tabacostandil-687bc.firebaseapp.com",
  projectId: "tabacostandil-687bc",
  storageBucket: "tabacostandil-687bc.appspot.com",
  messagingSenderId: "846266043674",
  appId: "1:846266043674:web:736420a2f28c70acf9b0a3",
  measurementId: "G-29W94RV2FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

console.log(analytics);