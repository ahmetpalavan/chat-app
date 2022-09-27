import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDYSVKMn538Jh1qAg4Ks7Qw-26BeaR53EU",
    authDomain: "my-chat-app-1b116.firebaseapp.com",
    projectId: "my-chat-app-1b116",
    storageBucket: "my-chat-app-1b116.appspot.com",
    messagingSenderId: "496219787277",
    appId: "1:496219787277:web:b485db957732c329e48544"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
