import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">📚 Bookify</div>
            <div className="nav-links">
                <a href="/" className="nav-link active">Home</a>
                <a href="/books" className="nav-link">Book Listing</a>
            </div>
        </div>


    )
}

export default Navbar