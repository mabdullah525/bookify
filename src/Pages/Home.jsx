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
        <div>
            {
                books.map((book) => (
                    <Card />
                ))}

        </div>
    )
}

export default Home;