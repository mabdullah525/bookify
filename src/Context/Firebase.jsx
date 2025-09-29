import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"; // Import the functions you need from the SDKs you need
export const FirebaseContext = createContext(null);
// Complete our context 
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"; // Import Firebase Authentication

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
const firebaseAuth = getAuth(firebaseApp); // Initialize Firebase Authentication
const googleProvider = new GoogleAuthProvider(); // Initialize Google Auth Provider

export const FirebaseProvider = ({ children }) => {

    // Function to sign up a user with email and password
    const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(firebaseAuth, email, password);

    // Function to sign in a user with email and password
    const signinUserWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(firebaseAuth, email, password);

    // Function to sign in with Google
    const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);



    return (
        <FirebaseContext.Provider value={{ app: firebaseApp, signupUserWithEmailAndPassword, signinUserWithEmailAndPassword, signInWithGoogle }}>
            {children}
        </FirebaseContext.Provider>
    );
}
// Complete the  provider
