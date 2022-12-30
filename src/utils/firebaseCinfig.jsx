// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlKJdbeHCmsW0I8Swr28IuV-TWN9_07u0",
  authDomain: "optica-fg.firebaseapp.com",
  projectId: "optica-fg",
  storageBucket: "optica-fg.appspot.com",
  messagingSenderId: "809957625431",
  appId: "1:809957625431:web:50c3c54ced4e5e5b251d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
