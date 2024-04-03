// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAit9yxYAYzoe4oX_FJzNIz9DaMtud8UU4",
  authDomain: "contact-app-e5d46.firebaseapp.com",
  projectId: "contact-app-e5d46",
  storageBucket: "contact-app-e5d46.appspot.com",
  messagingSenderId: "634080738618",
  appId: "1:634080738618:web:10f273d923600d59aaa403"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)