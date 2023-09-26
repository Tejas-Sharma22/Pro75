import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA6ua5ySbWCSa2MbW0maeETSkehV91n380",
  authDomain: "e-library-96b67.firebaseapp.com",
  projectId: "e-library-96b67", storageBucket: "e-library-96b67.appspot.com",
  messagingSenderId: "1083482858933",
  appId: "1:1083482858933:web:ba35290a5d8722660725fc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
