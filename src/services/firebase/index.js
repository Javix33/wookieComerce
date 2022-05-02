import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCM0pWoosVeh1LQGV68fIn6Iqw_XP0fWeQ",
  authDomain: "wookiecomere.firebaseapp.com",
  projectId: "wookiecomere",
  storageBucket: "wookiecomere.appspot.com",
  messagingSenderId: "263549052147",
  appId: "1:263549052147:web:4d7fd155bc1db127818386"
};

const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)