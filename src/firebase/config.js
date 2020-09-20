import * as firbase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD2Lry51babs4_diX-nlnY24SLXxvmaPuE",
  authDomain: "firegram-5ad1e.firebaseapp.com",
  databaseURL: "https://firegram-5ad1e.firebaseio.com",
  projectId: "firegram-5ad1e",
  storageBucket: "firegram-5ad1e.appspot.com",
  messagingSenderId: "666023192877",
  appId: "1:666023192877:web:8937d6b33073ee4d77cba4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();

export { storage, db };
