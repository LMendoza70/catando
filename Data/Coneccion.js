// Import the functions you need from the SDKs you need
import firebase ,{ initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyTsvH51vgOuaZHtTNNzbfETkMsptcqOw",
  authDomain: "catando-ando.firebaseapp.com",
  projectId: "catando-ando",
  storageBucket: "catando-ando.appspot.com",
  messagingSenderId: "595781243080",
  appId: "1:595781243080:web:5c0e183406dd27361a55fd",
  measurementId: "G-LEVMJFMJ5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();
export default app;