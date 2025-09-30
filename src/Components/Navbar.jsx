import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">📚 Bookify</div>
            <div className="nav-links">
                <a href="/" className="nav-link active">Home</a>
                <NavLink to="/list" className="nav-link">Book Listing</NavLink>
            </div>
        </div>


    )
}

export default Navbar