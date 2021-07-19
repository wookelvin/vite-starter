import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhjqEN6YE-4ICkItYsecjUEMcY25Dz0OY",
    authDomain: "rsvp-app-4631e.firebaseapp.com",
    projectId: "rsvp-app-4631e",
    storageBucket: "rsvp-app-4631e.appspot.com",
    messagingSenderId: "695984983595",
    appId: "1:695984983595:web:cae57ac31a73da1826e46e",
    measurementId: "G-J79P32SF3B"
};

let initiated = false;
let user: firebase.User | null = null;

function init() { 
    if (initiated){
        return;
    }
    firebase.initializeApp(firebaseConfig);
    initiated = true;
}

function startSession() {
    const auth = firebase.auth();
    return auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

function waitForUserCheck() {
    return new Promise<void>((resolve) => {
        const auth = firebase.auth();
        auth.onAuthStateChanged((userResponse) => {
            if (userResponse) {
                user = userResponse;
                console.log("user is signed in ", userResponse);
            } else {
                user = null;
                console.log("user is not signed in ");
            }
            resolve();
        });
    });
}

export default { 
    init,
    user,
    startSession, 
    waitForUserCheck
}