import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">📚 Bookify</div>
            <div className="nav-links">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/list"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Book Listing
                </NavLink>

                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Orders
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
