import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAng6G7uILy2UzD-rKTiCo2tNqMcKPd1Ag",
  authDomain: "chatapp-kashish.firebaseapp.com",
  projectId: "chatapp-kashish",
  storageBucket: "chatapp-kashish.appspot.com",
  messagingSenderId: "675961484633",
  appId: "1:675961484633:web:83b933864a9d8c73ea8848"
};


export const app = initializeApp(firebaseConfig);