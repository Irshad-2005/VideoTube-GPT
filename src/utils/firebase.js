
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCQQ3Mdm39pYSmJXytTRsY2JFWhA4SxssU",
    authDomain: "videotube-gpt.firebaseapp.com",
    projectId: "videotube-gpt",
    storageBucket: "videotube-gpt.firebasestorage.app",
    messagingSenderId: "448152582190",
    appId: "1:448152582190:web:04adf7e2c0fd183127c7bf",
    measurementId: "G-5EHC4FXCBF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
