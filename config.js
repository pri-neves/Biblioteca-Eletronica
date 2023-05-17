import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAyZB5dcgGL9jDb0HPu9iaeEiDlFH-YRz0",
  authDomain: "bibliotecaeletronica-3f20d.firebaseapp.com",
  projectId: "bibliotecaeletronica-3f20d",
  storageBucket: "bibliotecaeletronica-3f20d.appspot.com",
  messagingSenderId: "161348565394",
  appId: "1:161348565394:web:339803d2c485887382294b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
