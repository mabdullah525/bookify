import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Context/firebase'

const Home = () => {
    const [books, setBooks] = useState([]);
    const firebase = useFirebase();

    useEffect(() => {
        firebase.listAllBooks().then((snapshot) => {
            setBooks(snapshot.docs);
        });
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">📚 Book Listings</h2>
            <ul className="space-y-2">
                {books.map((book) => (
                    <li 
                        key={book.id} 
                        className="p-3 bg-gray-800 rounded-lg text-gray-100 shadow"
                    >
                        {book.data().name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;
