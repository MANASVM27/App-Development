// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBqtP0HHBuAdhxl-BMgx0HzT-mDMIgkl1A",
  authDomain: "manas-243f1.firebaseapp.com",
  projectId: "manas-243f1",
  storageBucket: "manas-243f1.appspot.com",
  messagingSenderId: "954550603357",
  appId: "1:954550603357:web:411e6ebbeacfc5583847b4"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
