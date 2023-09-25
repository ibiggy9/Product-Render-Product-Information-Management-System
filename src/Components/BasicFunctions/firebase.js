// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB59sMF87uActBUgwMVvXV63Z_giV6GYss",
  authDomain: "productrendercompany.firebaseapp.com",
  projectId: "productrendercompany",
  databaseURL: "https://productrendercompany-default-rtdb.firebaseio.com",
  storageBucket: "productrendercompany.appspot.com",
  messagingSenderId: "349295666318",
  appId: "1:349295666318:web:bff7c9b734a504f4a815df",
  measurementId: "G-K2210G1EJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)   
export const db = getDatabase(app)
export default app
 
    