import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Context/firebase'
import Card from '../Components/Card';

const Home = () => {

    const [books, setBooks] = useState([]);

    const firebase = useFirebase();
    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);
    return (
        <div className="home-container">
            {books.map((book) => (
                <Card key={book.id} {...book.data()} />
            ))}
        </div>

    )
}

export default Home;