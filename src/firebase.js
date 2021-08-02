import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPMplhZqH4AGzOvtRod9b4pJZBtUud87o",
  authDomain: "instragram-clone-1996.firebaseapp.com",
  projectId: "instragram-clone-1996",
  storageBucket: "instragram-clone-1996.appspot.com",
  messagingSenderId: "508091721963",
  appId: "1:508091721963:web:6f6e2602d6eaca58f3b6ae",
  measurementId: "G-FMQVQCH567",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
