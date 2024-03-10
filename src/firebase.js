// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAurFKkjf5bT-XTBXpAamgLGRz8E0Sczls",
  authDomain: "todoapp-691c9.firebaseapp.com",
  projectId: "todoapp-691c9",
  storageBucket: "todoapp-691c9.appspot.com",
  messagingSenderId: "1023748716330",
  appId: "1:1023748716330:web:d232019ac1a91dd80a1053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
