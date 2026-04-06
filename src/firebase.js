import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnUuwCU0ATRNNqCE-k3NjHT_3TbOEqzTc",
  authDomain: "altspace-dc872.firebaseapp.com",
  projectId: "altspace-dc872",
  storageBucket: "altspace-dc872.firebasestorage.app",
  messagingSenderId: "384918517365",
  appId: "1:384918517365:web:b1e8f4eeb99f6eaa9c2a3c",
  measurementId: "G-EJE7NENYDS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
