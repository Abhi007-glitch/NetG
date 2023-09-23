// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5I7WiHaVjDXAI-gtg9TSJMpawN4Wwe1o",
  authDomain: "netflix-gpt-c8631.firebaseapp.com",
  projectId: "netflix-gpt-c8631",
  storageBucket: "netflix-gpt-c8631.appspot.com",
  messagingSenderId: "99295858213",
  appId: "1:99295858213:web:13b341a32b2b21760279cc",
  measurementId: "G-XC4TL5LEQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();