// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB64_7bgU2sWMGqPE1nT9agXl6jfM7JlBU",
   authDomain: "felipe22570-sprint3.firebaseapp.com",
   projectId: "felipe22570-sprint3",
   storageBucket: "felipe22570-sprint3.appspot.com",
   messagingSenderId: "885452906758",
   appId: "1:885452906758:web:face185f7ccaa76832be87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };
