// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR5p7p6E1H31_kBVlNYW0h09T1rmdczMU",
    authDomain: "ema-john-simple-99371.firebaseapp.com",
    projectId: "ema-john-simple-99371",
    storageBucket: "ema-john-simple-99371.appspot.com",
    messagingSenderId: "854865697561",
    appId: "1:854865697561:web:d79a1adc5c02096ca34388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;