import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCMKHhNo8MME87ZQua5AQ5M9JN4ZlmHUk4",
  authDomain: "insta-2-react.firebaseapp.com",
  projectId: "insta-2-react",
  storageBucket: "insta-2-react.appspot.com",
  messagingSenderId: "1091133426857",
  appId: "1:1091133426857:web:5e3c7ed9ee77d51e212db8",
  measurementId: "G-KDW3PBEV5J"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};