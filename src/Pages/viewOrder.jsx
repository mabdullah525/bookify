import React, { useState, useEffect } from 'react'
import { useFirebase } from '../Context/firebase'
import BookCard from "../Components/Card";


const ViewOrder = () => {
    const firebase = useFirebase();

    const [books, setBooks] = useState([])

    useEffect(() => {
        3
        if (firebase.isLoggedIn) {
            firebase.fetchMyBooks(firebase.user.uid)
                .then((books) => {
                    setBooks(books.docs);
                });
        }
    }, [firebase]);
    console.log(books);
    if (!firebase.isLoggedIn) return <div className='text-center mt-10 text-2xl'>
        Please login to view your listed books.
    </div>


    return (
        <div className="orders-container">
            {books.map((book) => (
                <BookCard key={book.id} id={book.id} {...book.data()} />
            ))}
        </div>

    )
}

export default ViewOrder