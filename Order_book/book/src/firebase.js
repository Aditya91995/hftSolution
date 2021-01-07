import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAULI3xkmg2rNHxQ894LloCgZag-nIsFgg",
    authDomain: "book-9b17a.firebaseapp.com",
    projectId: "book-9b17a",
    storageBucket: "book-9b17a.appspot.com",
    messagingSenderId: "841158049495",
    appId: "1:841158049495:web:fe4ba76f26ac81446b3a92",
    measurementId: "G-S1S2P9K0GK"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;