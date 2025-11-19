// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b9d06.firebaseapp.com",
  projectId: "mern-estate-b9d06",
  storageBucket: "mern-estate-b9d06.firebasestorage.app",
  messagingSenderId: "169024097650",
  appId: "1:169024097650:web:dd72a08175d38222a721eb"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);