import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../Context/firebase'

const Detail = () => {
    const { id } = useParams()
    const firebase = useFirebase()

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        firebase.getBookById(id).then((doc) => {
            setData(doc.data())
            setLoading(false)
        })
    }, [firebase, id])

    if (loading) {
        return <div>Loading.....</div>
    }

    return (
        <div className="detail-container">
            {data?.coverUrl && (
                <img
                    className="detail-image"
                    src={data.coverUrl}
                    alt={data?.name}
                />
            )}
            <h2 className="detail-title">{data?.name}</h2>
            <p className="detail-text">
                This book is sold by <span className="font-semibold">{data?.displayName}</span>
                and costs <span className="font-bold text-green-600">Rs.{data?.price}</span>
            </p>
        </div>

    )
}

export default Detail
