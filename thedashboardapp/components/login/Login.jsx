"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login validation logic here
    
     try {
      const response = await axios.post("/api/login", { email, password });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.push("/dashboardhomepage");
      } else {
        alert(response.data.error || "Login failed");
      }
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
    
  };

  return (
    <div className="login-signup-container">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Welcome to The Dashboard</h2>

          <div className="input-field">
            <i>📧</i>
            <input 
            type="email" 
            placeholder="email" 
            onChange={(e)=>setEmail(e.target.value)}
            required />
          </div>

          <div className="input-field">
            <i>🔒</i>
            <input 
            type="password" 
            placeholder="password" 
            onChange={(e)=>setPassword(e.target.value)}
            required />
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
