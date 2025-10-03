import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../Context/firebase";

const Detail = () => {
    const params = useParams();
    const firebase = useFirebase();

    const [data, setData] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        firebase.getBookById(params.id).then((value) => setData(value.data()));
    }, [params.id, firebase]);

    const placeOder = async () => {
        const result = await firebase.placeOrder(params.id, qty);
        console.log("Order Placed:", result);
    }

    if (!data) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="detail-card">
            {/* Book Image */}
            <img className="detail-image" src={data.coverUrl} alt={data.name} />

            {/* Book Title */}
            <h2 className="detail-title">{data.name}</h2>

            {/* Book Details */}
            <div className="detail-info">
                <p>
                    <span className="label">Price:</span>{" "}
                    <span className="price">Rs. {data.price}</span>
                </p>
                <p>
                    <span className="label">ISBN:</span> {data.isbnNumber}
                </p>
            </div>

            {/* Owner Details */}
            <div className="owner-info">
                <h3>Owner Details</h3>
                <p>
                    <span className="label">Name:</span> {data.displayName}
                </p>
                <p>
                    <span className="label">Email:</span> {data.userEmail}
                </p>
            </div>

            <input
                className="input-number"
                type="number"
                placeholder="Enter Quantity"
                required
                onChange={e => setQty(e.target.value)}
                value={qty}
            />

            {/* Buy Button */}
            <button className="buy-button" onClick={placeOder}>Buy Now</button>
        </div>
    );
};

export default Detail;
