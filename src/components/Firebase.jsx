// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMQI2EC8eCmEZ7P5tSRNXomC1mpAF3BJM",
  authDomain: "portfolio-9ae4f.firebaseapp.com",
  projectId: "portfolio-9ae4f",
  storageBucket: "portfolio-9ae4f.firebasestorage.app",
  messagingSenderId: "626186785269",
  appId: "1:626186785269:web:21007c12986c5a353410bc",
  measurementId: "G-BZQ3BSP4BZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };