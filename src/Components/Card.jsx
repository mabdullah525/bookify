import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../Context/firebase';



const Card = (props) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  return (
    <div className="card">
      <a href="#">
        {/* ✅ Image dynamically from props */}
        <img className="card-image" src={props.coverUrl} alt={props.name} />
      </a>
      <div className="card-body">
        <a href="#">
          <h5 className="card-title">
            {props.name}
          </h5>
        </a>
        <p className="card-text">
          This Book has a title <span className="font-semibold">{props.name}</span>,
          sold by <span className="font-semibold">{props.displayName}</span>,
          and costs <span className="text-green-400">Rs.{props.price}</span>
        </p>
        <a onClick={e => navigate(`/book/view/${props.id}`)} className="card-button">
          View Details
          <svg
            className="card-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Card
