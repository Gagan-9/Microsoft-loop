// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop2-10155.firebaseapp.com",
  projectId: "loop2-10155",
  storageBucket: "loop2-10155.firebasestorage.app",
  messagingSenderId: "844496543979",
  appId: "1:844496543979:web:83e1f72dc8638af94f9eae",
  measurementId: "G-EERDFW08T8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
