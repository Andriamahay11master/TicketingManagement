// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const analytics = getAnalytics(app);

export default { app, auth, analytics };