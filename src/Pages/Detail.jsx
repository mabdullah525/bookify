import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFirebase } from '../Context/firebase'

const Detail = () => {
    const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState(null);

    useEffect(() => {
        firebase.getBookById(params.id).then((value) => setData(value.data()));

        if (data === null) return <div>Loading.....</div>

    }, []);
    return (
        <div>Detail</div>
    )
}

export default Detail