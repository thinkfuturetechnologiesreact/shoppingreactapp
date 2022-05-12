import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcVzH0iBOi3X_IOhU6aB_LilQ2BUrGEtM",
  authDomain: "shopping-app-a73ef.firebaseapp.com",
  projectId: "shopping-app-a73ef",
  storageBucket: "shopping-app-a73ef.appspot.com",
  messagingSenderId: "653667427771",
  appId: "1:653667427771:web:b7a001e6083c87674e109e",
  measurementId: "G-FBL0V07KY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;