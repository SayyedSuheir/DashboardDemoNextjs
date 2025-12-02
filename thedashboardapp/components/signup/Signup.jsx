"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";


export default function Signup() {
  
 
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password, setPassword] =useState();
  const [confirmPassword,setConfirmPassword] = useState();

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post('/api/register', {
      name,
      email,
      password,
      confirmPassword
    });
    
    if (response.status === 201) {
      console.log("Signup success:", response.data);
      alert("Registration successful! Please login.");
      // Redirect to login page
      window.location.href = '/'; // or use Next.js router
    }
    
  } catch (error) {
    console.error("Signup error:", error);
    
    if (error.response) {
      // Server responded with an error status
      const errorMessage = error.response.data.error || "Registration failed";
      
      switch (error.response.status) {
        case 400:
          alert(errorMessage); // Validation errors
          break;
        case 409:
          alert("This email is already registered. Please use a different email or login.");
          break;
        case 500:
          alert("Server error. Please try again later.");
          break;
        default:
          alert(errorMessage);
      }
    } else if (error.request) {
      // Request made but no response received
      alert("Cannot connect to server. Please check your connection.");
    } else {
      // Something else went wrong
      alert("An unexpected error occurred. Please try again.");
    }
  }
};
  


  return (
    <div className="login-signup-container">
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h2>Welcome to The Dashboard</h2>

          <div className="input-field">
            <i>👤</i>
            <input
             type="text"
              placeholder="username" 
              onChange={(e)=>setName(e.target.value)} 
              required />
          </div>
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
             placeholder="**********"
             onChange={(e)=>setPassword(e.target.value)}
             required />
          </div>
          <div className="input-field">
            <i>🔒</i>
            <input
             type="password" 
             placeholder="confirm-password" 
             onChange={(e)=>setConfirmPassword(e.target.value)}
             required />
          </div>

          <button className="btn" type="submit">
            Sign up
          </button>

          <div className="options">
            Already have an account? <Link href="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
