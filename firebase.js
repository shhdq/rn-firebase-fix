import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {};

let app;

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
