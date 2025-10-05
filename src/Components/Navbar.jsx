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

            {/* 🔹 Right Side Buttons */}
            <div className="absolute right-6 flex gap-4">
                <NavLink
                    to="/login"
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300"
                >
                    Login
                </NavLink>

                <NavLink
                    to="/register"
                    className="px-4 py-2 bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition duration-300"
                >
                    Register
                </NavLink>
            </div>
        </div>

    );
};

export default Navbar;
