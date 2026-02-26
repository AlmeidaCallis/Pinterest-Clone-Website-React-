import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" width="40" alt="logo"/>
        <h1 style={{fontSize:32,margin:'15px 0'}}>Welcome back</h1>
        <form>
          <input type="text" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <p style={{textAlign:'left',fontSize:14,fontWeight:700,margin:'5px 0'}}><a href="#" style={{color:'black',textDecoration:'none'}}>Forgot your password?</a></p>
          <button type="submit" className="btn btn-primary" style={{width:'100%',marginTop:15}}>Log in</button>
        </form>
        <p style={{marginTop:20}}>OR</p>
        <button className="btn btn-secondary" style={{width:'100%',background:'#1877f2',color:'white',border:'none',marginTop:10}}>Continue with Facebook</button>
        <br/><br/>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
