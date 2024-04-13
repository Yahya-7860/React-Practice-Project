import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBzMrvpy_TRc0CTqpL1vERasQe0jK1mc8g",
    authDomain: "chat-application-e6612.firebaseapp.com",
    projectId: "chat-application-e6612",
    storageBucket: "chat-application-e6612.appspot.com",
    messagingSenderId: "176547653591",
    appId: "1:176547653591:web:3d45527b71c0e447448d92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { app, auth }

