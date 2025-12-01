"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login validation logic here
    router.push("/dashboardhomepage");
  };

  return (
    <div className="login-signup-container">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Welcome to The Dashboard</h2>

          <div className="input-field">
            <i>👤</i>
            <input type="text" placeholder="username" required />
          </div>

          <div className="input-field">
            <i>🔒</i>
            <input type="password" placeholder="password" required />
          </div>

          <button className="btn" type="submit">
            Login
          </button>

          <div className="options">
            Forgot password? <Link href="/signupPage">or Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
