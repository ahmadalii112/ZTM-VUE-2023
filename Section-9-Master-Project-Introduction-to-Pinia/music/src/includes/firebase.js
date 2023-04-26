import firebase from  "firebase/app";
import  "firebase/auth";
import  "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEB4mHmQ0u28fN4uHdOaQ-QSRQINyNp1M",
    authDomain: "music-46aa7.firebaseapp.com",
    projectId: "music-46aa7",
    storageBucket: "music-46aa7.appspot.com",
    // messagingSenderId: "1005442235015",
    appId: "1:1005442235015:web:d3b03b61224dc27551d622"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
const db =firebase.firestore();

export  {
    auth,
    db,
}