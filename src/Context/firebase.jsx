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
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore";
import Swal from "sweetalert2"; // ✅ import SweetAlert2

export const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
    apiKey: "AIzaSyAoOnBEUTCvS5NBM8-PMZuG6UO9F3VqSQA",
    authDomain: "bookify-66100.firebaseapp.com",
    projectId: "bookify-66100",
    storageBucket: "bookify-66100.firebasestorage.app",
    messagingSenderId: "785991373853",
    appId: "1:785991373853:web:420c2f60557d957c11e2f4",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user || null);
        });
        return () => unsubscribe();
    }, []);

    // 🟢 AUTH FUNCTIONS
    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

    // 🟢 ADD NEW BOOK
    const handelCreateNewListing = async (name, isbnNumber, price, coverPic) => {
        try {
            const data = new FormData();
            data.append("file", coverPic);
            data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

            const res = await fetch(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                { method: "POST", body: data }
            );

            const fileData = await res.json();
            const imageUrl = fileData.secure_url;

            await addDoc(collection(firestore, "books"), {
                name,
                isbnNumber,
                price,
                userID: user.uid,
                coverUrl: imageUrl,
                userEmail: user.email,
                displayName: user.displayName || user.email.split("@")[0],
                createdAt: new Date(),
            });

            console.log("✅ Book Added:", name);
        } catch (err) {
            console.error("❌ Error creating listing:", err);
        }
    };

    // 🟢 GET ALL BOOKS
    const listAllBooks = async () => getDocs(collection(firestore, "books"));

    // 🟢 GET BOOK BY ID
    const getBookById = async (id) => {
        const docRef = doc(firestore, "books", id);
        return await getDoc(docRef);
    };

    // 🟢 PLACE ORDER (SweetAlert2 popup added)
    const placeOrder = async (bookId, qty) => {
        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Login Required",
                text: "Please log in to place an order.",
            });
            return;
        }

        try {
            const collectionRef = collection(firestore, "books", bookId, "orders");
            const result = await addDoc(collectionRef, {
                userID: user.uid,
                userEmail: user.email,
                qty: Number(qty),
                displayName: user.displayName || user.email.split("@")[0],
                createdAt: new Date(),
            });

            console.log("✅ Order Placed:", result.id);

            // ✅ SweetAlert Success Message
            Swal.fire({
                icon: "success",
                title: "Order Placed!",
                text: "Your order has been placed successfully.",
                confirmButtonColor: "#3085d6",
            });

            return result;
        } catch (err) {
            console.error("❌ Error placing order:", err);
            Swal.fire({
                icon: "error",
                title: "Order Failed",
                text: "Something went wrong while placing your order.",
            });
        }
    };

    // 🟢 FETCH USER'S BOOKS
    const fetchMyBooks = async (userId) => {
        const collectionRef = collection(firestore, "books");
        const q = query(collectionRef, where("userID", "==", userId));
        return await getDocs(q);
    };

    // 🟢 GET ORDERS FOR SPECIFIC BOOK
    const getOrders = async (bookId) => {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        return await getDocs(collectionRef);
    };

    const isLoggedIn = !!user;

    return (
        <FirebaseContext.Provider
            value={{
                app: firebaseApp,
                signupUserWithEmailAndPassword,
                signinUserWithEmailAndPassword,
                signInWithGoogle,
                handelCreateNewListing,
                listAllBooks,
                getBookById,
                placeOrder,
                fetchMyBooks,
                getOrders,
                isLoggedIn,
                user,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};
