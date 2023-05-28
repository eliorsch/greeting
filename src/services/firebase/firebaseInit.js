// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSqCn6JETxjvUNc3mnFArUpj3W2etbdjk",
  authDomain: "greetings-e736d.firebaseapp.com",
  projectId: "greetings-e736d",
  storageBucket: "greetings-e736d.appspot.com",
  messagingSenderId: "179628796422",
  appId: "1:179628796422:web:13fdd27a5aa0757124f187",
  measurementId: "G-MGWYQE9PSM",
};

export default function firebaseInit() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  return {
    app,
    analytics,
    auth,
    db,
  };
}
