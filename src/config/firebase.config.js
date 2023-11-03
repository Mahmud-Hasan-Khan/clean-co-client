import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-k1W-IVgUWhT2fe8eFKv-K2ETxIdJ5B4",
    authDomain: "clean-co-mahmud.firebaseapp.com",
    projectId: "clean-co-mahmud",
    storageBucket: "clean-co-mahmud.appspot.com",
    messagingSenderId: "734132798280",
    appId: "1:734132798280:web:4df01fe261b583fb38297d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;