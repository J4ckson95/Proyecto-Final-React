// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkDS3yZkKWYcgBantDqKnNmZvD92pvUMA",
    authDomain: "funkostore-65264.firebaseapp.com",
    projectId: "funkostore-65264",
    storageBucket: "funkostore-65264.appspot.com",
    messagingSenderId: "710191184143",
    appId: "1:710191184143:web:75f84e0c848b51b537e67a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)
export default DB