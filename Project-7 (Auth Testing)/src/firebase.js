import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTAj0dYO4jk--vTCKGBovt_d2PIaIrAow",
  authDomain: "auth-testing-c6d3b.firebaseapp.com",
  projectId: "auth-testing-c6d3b",
  storageBucket: "auth-testing-c6d3b.appspot.com",
  messagingSenderId: "715502123881",
  appId: "1:715502123881:web:3c927c57578ef94a205bf8"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth()

export {app, auth}