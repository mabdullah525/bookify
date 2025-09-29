import React, { useState } from 'react'
import { useFirebase } from '../Context/firebase'
import { Link } from "react-router-dom";


const Register = () => {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted with:", { email, password });
        await firebase.signupUserWithEmailAndPassword(email, password)
        console.log("User registered successfully");
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
                    <input type="password"
                        placeholder="Password"
                        className="input"
                        required
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <button type="submit" className="btn">Create Account</button>
                </form>

                <p className="login-text">
                    Already have an account?{" "}
                    <Link to="/login" className="login-link">Login</Link>
                </p>
            </div>
        </div>

    )
}

export default Register