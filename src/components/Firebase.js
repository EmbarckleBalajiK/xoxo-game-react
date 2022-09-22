import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyrbXREjqMqKcVRDHugxtbtgwSJ11VJn0",
    authDomain: "xoxo-game-22373.firebaseapp.com",
    projectId: "xoxo-game-22373",
    storageBucket: "xoxo-game-22373.appspot.com",
    messagingSenderId: "993958192351",
    appId: "1:993958192351:web:0651c1dbea5a0bff41756a",
    measurementId: "G-8SFYTZB36S"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = firebase.analytics(app);

// Get a reference to the database service
export const database = firebase.database(app);

// setLoading(true);


//     database.ref("/rooms").orderByChild("player2").equalTo("").limitToFirst(1).once("value", (a) => {
//         database.ref
//     })



