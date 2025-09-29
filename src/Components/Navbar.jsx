import React from 'react'

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="logo">📚 Bookify</div>
            <div class="nav-links">
                <a href="/" class="nav-link">Home</a>
                <a href="/books" class="nav-link">Book Listing</a>
            </div>
        </div>

    )
}

export default Navbar