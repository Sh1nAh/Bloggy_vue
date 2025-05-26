import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLw0S-CbRLWeoZ7jUwia8hg_VulsgJ_pQ",
  authDomain: "bloggy-vue-shinah.firebaseapp.com",
  projectId: "bloggy-vue-shinah",
  storageBucket: "bloggy-vue-shinah.firebasestorage.app",
  messagingSenderId: "473159335472",
  appId: "1:473159335472:web:2f8e9453dc52a6258bf7f5"
};

// initialize firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();

let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };