import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC98ZmmNMSU_Kdu6d3YI2c1Tc3l73p7FFI",
  authDomain: "app-padel-f4cfd.firebaseapp.com",
  projectId: "app-padel-f4cfd",
  storageBucket: "app-padel-f4cfd.appspot.com",
  messagingSenderId: "451546976324",
  appId: "1:451546976324:web:9a997d0708f20d95b56c11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
