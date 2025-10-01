import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Context/firebase'

const Home = () => {

    const [books, setBooks] = useState([]);

    const firebase = useFirebase();
    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs));
    }, []);
    return (
        <div>
            {
                books.map(book => <li>{book.data().name}</li>)
            }

        </div>
    )
}

export default Home;