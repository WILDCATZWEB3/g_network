import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqek76X9vaz1DNrzI2-6RryZjS9Uo5HKE",
  authDomain: "g-learning-platform.firebaseapp.com",
  projectId: "g-learning-platform",
  storageBucket: "g-learning-platform.appspot.com", // Corrected
  messagingSenderId: "948093127709",
  appId: "1:948093127709:web:aec4c2ad44b4a84bd28af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
