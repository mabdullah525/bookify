import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Context/firebase'

const Home = () => {

    const [books, setBooks] = useState([]);

    const firebase = useFirebase();
    useEffect(() => {
        firebase.listAllBooks().then((docs) => console.log(docs.docs[0].data()));
    }, []);
    return (
        <div>Home</div>
    )
}

export default Home;