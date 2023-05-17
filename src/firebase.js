// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOKdiDD7XiDQy9ODWPTU6VAOxO-UYGanU",
  authDomain: "notes-react-app-adb5b.firebaseapp.com",
  projectId: "notes-react-app-adb5b",
  storageBucket: "notes-react-app-adb5b.appspot.com",
  messagingSenderId: "764887999051",
  appId: "1:764887999051:web:8e6a6ff7f8b5b2fda763ce",
  measurementId: "G-Q7YYFS9MPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")