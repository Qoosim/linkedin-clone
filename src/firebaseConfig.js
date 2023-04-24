// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG4vLhSk1XzEygBNfbRSdB06l5_ims1AQ",
  authDomain: "linkedin-clone-181bf.firebaseapp.com",
  projectId: "linkedin-clone-181bf",
  storageBucket: "linkedin-clone-181bf.appspot.com",
  messagingSenderId: "922682235163",
  appId: "1:922682235163:web:d0ba7dbd426968a22f1bbe",
  measurementId: "G-JXGZNQ9DQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const analytics = getAnalytics(app);

export { app, auth };