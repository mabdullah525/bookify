import React, { useState } from 'react'
import { useFirebase } from '../Context/firebase'
import { Link } from "react-router-dom";

const Login = () => {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login a User:", { email, password });
        await firebase.signinUserWithEmailAndPassword(email, password)
        console.log("Login  successfully");
    }


    console.log(firebase);
    return (
        <div className="register-page">
            <div className="register-box">
                <h2 className="title">Create Your Account</h2>

                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input"
                        required
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        required
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <button type="submit" className="btn">Login</button>
                </form>

                {/* Divider line */}
                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google Sign-In Button */}
                <button
                    type="button"

                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Sign in with Google
                </button>
                <p className="login-text">
                    Already have an account?{" "}
                    <Link to="/Register" className="login-link">
                        Register
                    </Link>
                </p>
            </div>
        </div>


    )
}

export default Login