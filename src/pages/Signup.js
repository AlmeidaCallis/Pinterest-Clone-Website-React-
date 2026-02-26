import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup(){
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" width="40" alt="logo"/>
        <h1 style={{fontSize:32,margin:'15px 0'}}>Sign up to see more</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Create a password" required />
          <input type="number" placeholder="Age" required />
          <button type="submit" className="btn btn-primary" style={{width:'100%',marginTop:15}}>Continue</button>
        </form>
        <p style={{fontSize:12,color:'gray',marginTop:15}}>By continuing, you agree to Pinterest's Terms of Service</p>
        <hr style={{margin:'20px 0',border:0,borderTop:'1px solid #eee'}} />
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
