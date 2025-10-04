import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../Context/firebase'

const ViewOrderDetail = () => {

  const params = useParams();
  const firestore = useFirebase();

  const [orders, setOrders] = useState([])
  useEffect(() => {
    firestore.getOrders(params.id).then(orders => setOrders(orders.docs));

  }, [])
  return (
    <div className="container-order-detail">
      <h1 className="order-heading">Orders</h1>

      {orders.map((order, index) => {
        const data = order.data();
        return (
          <div key={index} className="order-card">
            <h5 className="order-name">Ordered By: {data.displayName}</h5>
            <p className="order-qty">Quantity: {data.qty}</p>
            <p className="order-email">User Email: {data.userEmail}</p>
          </div>
        );
      })}
    </div>

  )
}

export default ViewOrderDetail