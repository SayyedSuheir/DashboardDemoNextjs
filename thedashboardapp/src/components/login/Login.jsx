"use client";

import Link from "next/link"
function Login() {
  return (
    <div className="login-signup-container">
            <div className="login-container ">
            <form action={"/dashboardhomepage"}>
                        <h2>Welcome to The Dashboard </h2>
                        <div className="input-field">
                        <i>👤</i>
                        <input type="text" placeholder="username" required/>
                        </div>

                        <div className="input-field">
                        <i>🔒</i>
                        <input type="password" placeholder="password" required/>
                        </div>

                        <button className="btn" type="submit">Login</button>

                        <div className="options">
                        Forgot password? <Link href="/signupPage">or Sign Up</Link>
                        </div>
                </form>
            </div>
    </div>
  )
}

export default Login