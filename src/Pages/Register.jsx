import React from 'react'

const Register = () => {
    return (
        <div class="register-page">
            <div class="register-box">
                <h2 class="title">Create Your Account</h2>
                <form class="register-form">
                    <input type="email" placeholder="Email Address" class="input" required />
                    <input type="password" placeholder="Password" class="input" required />
                    <button type="submit" class="btn">Register</button>
                </form>

                <p class="login-text">
                    Already have an account? <a href="#" class="login-link">Login</a>
                </p>
            </div>
        </div>

    )
}

export default Register