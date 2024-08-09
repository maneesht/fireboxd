import { initializeApp, getApps } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDNC8T07TV5qwajjKBsXGFEk6j3e781GGc",
  authDomain: "lunch-and-learn-431918.firebaseapp.com",
  projectId: "lunch-and-learn-431918",
  storageBucket: "lunch-and-learn-431918.appspot.com",
  messagingSenderId: "18061936559",
  appId: "1:18061936559:web:7315189693c8a02253115a",
};

export const firebaseApp  = getApps()[0] ?? initializeApp(firebaseConfig);