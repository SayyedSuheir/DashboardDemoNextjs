"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent full-page reload
    // You can add signup logic here before navigating
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
            <i>📧</i>
            <input type="email" placeholder="email" required />
          </div>
          <div className="input-field">
            <i>🔒</i>
            <input type="password" placeholder="password" required />
          </div>
          <div className="input-field">
            <i>🔒</i>
            <input type="password" placeholder="confirm-password" required />
          </div>

          <button className="btn" type="submit">
            Sign up
          </button>

          <div className="options">
            Forgot password? <Link href="/">or Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
