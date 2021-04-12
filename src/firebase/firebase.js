import firebase from 'firebase';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCNILQ49DnfFS4p6908faWjbyhf8Jm4zn4",
    authDomain: "good-hands-3117c.firebaseapp.com",
    databaseURL: "https://good-hands-3117c-default-rtdb.firebaseio.com",
    projectId: "good-hands-3117c",
    storageBucket: "good-hands-3117c.appspot.com",
    messagingSenderId: "824055240816",
    appId: "1:824055240816:web:8a19e813b268911f5dfcb5"
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();