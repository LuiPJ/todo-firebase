import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoLd_m7ixAJZMilIYyh61O9LKue6OPd68",
  authDomain: "todo-crud-bf1e2.firebaseapp.com",
  projectId: "todo-crud-bf1e2",
  storageBucket: "todo-crud-bf1e2.appspot.com",
  messagingSenderId: "740296458886",
  appId: "1:740296458886:web:22ede8d18f0d5dd8d78707",
  measurementId: "G-ZKM9ER8BYK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
