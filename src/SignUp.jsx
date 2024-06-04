import React from 'react'
import { useState } from 'react'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from './Firebase'
import {NavLink} from 'react-router-dom'
const auth=getAuth(app)
function SignUp() {
    const[email,setemail]=useState("")
    const[Password,setpassword]=useState("")
const createuser=()=>{
    createUserWithEmailAndPassword(auth,email,Password).then((value)=> alert("Account Created"));
}
  return (
    <>
      <div className="signup-form-container">
      <h2 className="signup-form-title">Create Account</h2>
      <div className="form-group">

    <label>Email</label>
    <input onChange={e=>setemail(e.target.value)} value={email} type='Email' required placeholder='Enter Email'/>
    <div className="form-group">
</div>
    <label>Password</label>
    <input onChange={e=>setpassword(e.target.value)}  value={Password}  type='Password' required placeholder='Enter Password'/>
    </div>
    <button className="signup-button" onClick={createuser}>        
        Sign Up
</button>
<NavLink to="/login"><h3 className='login-title'><span>Or</span>Login</h3></NavLink>
</div>
    </>
  )
}

export default SignUp