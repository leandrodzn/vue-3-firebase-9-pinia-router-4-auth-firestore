// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV2161UZdYghqVqpkX3VPJmoM9YJE07F8",
  authDomain: "fire-app-1-23.firebaseapp.com",
  projectId: "fire-app-1-23",
  storageBucket: "fire-app-1-23.appspot.com",
  messagingSenderId: "744370446913",
  appId: "1:744370446913:web:c0cc9f558d4e62289ddcc0"
};

// Initialize Firebase
//const app = 
initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};