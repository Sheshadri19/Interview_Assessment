import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// Firebase configuration (Replace with your Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyCReVkk_SCWzbEPgFzQTenzk-GwspBcEpE",
  authDomain: "interview-assessment-4b389.firebaseapp.com",
  projectId: "interview-assessment-4b389",
  storageBucket: "interview-assessment-4b389.firebasestorage.app",
  messagingSenderId: "568496392429",
  appId: "1:568496392429:web:7e75d532c0e1191fd264e4",
  measurementId: "G-202ZJ89ZQH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signOut };
