import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBjFlbvjX2K_DcPS0CQ_mCO2ve4jHjANUg",
  authDomain: "react-45060-isnardi.firebaseapp.com",
  projectId: "react-45060-isnardi",
  storageBucket: "react-45060-isnardi.appspot.com",
  messagingSenderId: "181633976384",
  appId: "1:181633976384:web:512c8b203e01d213b177a5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
