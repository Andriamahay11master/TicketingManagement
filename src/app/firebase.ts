// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3GFI8GjkYlOuYdpV3ws1OwZvuhMuU6g8",
  authDomain: "ticketing-management-5f1e4.firebaseapp.com",
  projectId: "ticketing-management-5f1e4",
  storageBucket: "ticketing-management-5f1e4.appspot.com",
  messagingSenderId: "380102921586",
  appId: "1:380102921586:web:f8aa13578afbd3ebeae1eb",
  measurementId: "G-JQKXVE9DNE"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth }