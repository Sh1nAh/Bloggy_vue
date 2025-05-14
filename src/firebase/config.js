import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBq-BLqmXOb4XU5vYvxPnH8rU9HpElJMVI",
    authDomain: "vue-blog-system-eb782.firebaseapp.com",
    projectId: "vue-blog-system-eb782",
    storageBucket: "vue-blog-system-eb782.firebasestorage.app",
    messagingSenderId: "602294995018",
    appId: "1:602294995018:web:dc6465ebcf47db3d873eb3"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();

let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };