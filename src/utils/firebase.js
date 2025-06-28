// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQQ3Mdm39pYSmJXytTRsY2JFWhA4SxssU",
    authDomain: "videotube-gpt.firebaseapp.com",
    projectId: "videotube-gpt",
    storageBucket: "videotube-gpt.firebasestorage.app",
    messagingSenderId: "448152582190",
    appId: "1:448152582190:web:0b3f234162c7c6f727c7bf",
    measurementId: "G-DDH8047P2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);