"use client";

import Link from "next/link";

import axios from "axios";

export default function Signup() {
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    const response = await axios.post('/api/register', {name,email,password});
    console.log(response);
  };

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password, setPassword] =useState();

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
            <input type="password" placeholder="confirm-password" required />
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
