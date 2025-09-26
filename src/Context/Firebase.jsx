import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"; // Import the functions you need from the SDKs you need
export const FirebaseContext = createContext(null);
// Complete our context 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoOnBEUTCvS5NBM8-PMZuG6UO9F3VqSQA",
    authDomain: "bookify-66100.firebaseapp.com",
    projectId: "bookify-66100",
    storageBucket: "bookify-66100.firebasestorage.app",
    messagingSenderId: "785991373853",
    appId: "1:785991373853:web:420c2f60557d957c11e2f4"
};

export const useFirebase = () => useContext(FirebaseContext);
// This is a custom hook to use the context

const firebaseApp = initializeApp(firebaseConfig); // Initialize Firebase

export const FirebaseProvider = (props) => {
    <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
};
// Complete the  provider
