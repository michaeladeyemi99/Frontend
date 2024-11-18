// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmhVUH0n6Go87d52o4sZNv4P5Wp-QaaCs",
  authDomain: "kanban-dashboard-d74d9.firebaseapp.com",
  projectId: "kanban-dashboard-d74d9",
  storageBucket: "kanban-dashboard-d74d9.firebasestorage.app",
  messagingSenderId: "785819201551",
  appId: "1:785819201551:web:cafaa5a40e600630eff37a",
  measurementId: "G-GHKSTJ7931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth