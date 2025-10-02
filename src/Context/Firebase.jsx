import React, { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app"; 
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc } from "firebase/firestore"; 

export const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
    apiKey: "AIzaSyAoOnBEUTCvS5NBM8-PMZuG6UO9F3VqSQA",
    authDomain: "bookify-66100.firebaseapp.com",
    projectId: "bookify-66100",
    storageBucket: "bookify-66100.firebasestorage.app",
    messagingSenderId: "785991373853",
    appId: "1:785991373853:web:420c2f60557d957c11e2f4"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        });

        return () => unsubscribe();
    }, []);

    // Auth Functions
    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signInWithGoogle = () =>
        signInWithPopup(firebaseAuth, googleProvider);

    const isLoggedIn = !!user;

    // ✅ Function to create a new listing
    const handelCreateNewListing = async (name, isbnNumber, price, coverPic) => {
        try {
            // Step 1: Upload to Cloudinary
            const data = new FormData();
            data.append("file", coverPic);
            data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

            const res = await fetch(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: data,
                }
            );

            const fileData = await res.json();
            const imageUrl = fileData.secure_url;

            // Step 2: Save in Firestore
            await addDoc(collection(firestore, "books"), {
                name,
                isbnNumber,
                price,
                coverUrl: imageUrl,
                createdBy: user ? user.uid : null,
                createdAt: new Date(),
            });

            console.log("✅ Book Added:", name);
        } catch (err) {
            console.error("❌ Error creating listing:", err);
        }
    };

    const listAllBooks = async () => {
        return getDocs(collection(firestore, "books"));
    }

    const getBookById = async (id) => {
        const docRef = doc(firestore, "books", id);
        const result = await getDoc(docRef);
        return result;
    }

    return (
        <FirebaseContext.Provider
            value={{
                app: firebaseApp,
                signupUserWithEmailAndPassword,
                signinUserWithEmailAndPassword,
                signInWithGoogle,
                handelCreateNewListing,
                listAllBooks,
                isLoggedIn,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
