import React from 'react'
import './App.css'
import { useState } from 'react'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './Firebase'
import { useNavigate } from 'react-router-dom'

const auth=getAuth(app)

function Login() {

  const navigate = useNavigate();
  
  const[email,setemail]=useState("");
  const[Password,setpassword]=useState("");
  const LoginUser=()=>{
    signInWithEmailAndPassword(auth,email,Password).then((value)=> navigate("/todo")).catch((err)=>console.log(err));
}
  return (
    <>
    <div className="signup-form-container">
      <h2 className="signup-form-title">Log In</h2>
      <div className="form-group">

    <label>Email</label>
    <input onChange={(e)=>setemail(e.target.value)} value={email} type='Email' required placeholder='Enter Email'/>
    <div className="form-group">
</div>
    <label>Password</label>
    <input onChange={(e)=>setpassword(e.target.value)}  value={Password}  type='Password' required placeholder='Enter Password'/>
    </div>
    <button className="signup-button" onClick={LoginUser}>        
        Log In
</button>
 <h3 className='login-title'><span>Or</span>Sign Up</h3>
</div>
    </>
  )
}

export default Login