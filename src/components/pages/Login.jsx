import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import "./login.css"
const Login = () => {
  
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  const LogInHandle = () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user.uid)
    navigate("/admin")
  })
  .catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
  });
  }
  

  return (
    <div className='loginPage'>
        <h1>Login</h1>
        
        <div className='formBox'>
            <input value={email} type='email' onChange={(e) =>setEmail 
        (e.target.value)
        } placeholder='email'/>
        <input value={password} type="password" 
        onChange={(e) =>setPassword 
          (e.target.value)}
        placeholder='password'/>
        <button onClick={LogInHandle}>Log in</button>
        
        </div>
        
        
    </div>
  )
}

export default Login

