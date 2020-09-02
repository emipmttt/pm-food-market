import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyAKj-35DJvwU4gjqAKexoHtI0FDEFmfwgU",
    authDomain: "choosecook-project.firebaseapp.com",
    databaseURL: "https://choosecook-project.firebaseio.com",
    projectId: "choosecook-project",
    storageBucket: "choosecook-project.appspot.com",
    messagingSenderId: "408885037522",
    appId: "1:408885037522:web:1f5942ef2dc4813217e00b",
    measurementId: "G-KXM01C6WJ3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase