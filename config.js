import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAIDil30V53UiMvCCSKqlqYdXF2rmfz3nU",
  authDomain: "pro-71-aefa5.firebaseapp.com",
  projectId: "pro-71-aefa5",
  storageBucket: "pro-71-aefa5.appspot.com",
  messagingSenderId: "497300604674",
  appId: "1:497300604674:web:1078b94cfe9b1c856d641b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
