import React, { useEffect } from 'react'
import { useFirebase } from '../Context/firebase'

const viewOrder = () => {
    const firebase = useFirebase();

    useEffect(() => {
        if (firebase.isLoggedIn) {
            firebase.fetchMyOrders()
                .then((books) => books.docs[0].data())
                .then((orders) => {
                    console.log("My Orders:", orders);
                });
        }
    }, [firebase.isLoggedIn]);


    return (
        <div>viewOrder</div>
    )
}

export default viewOrder