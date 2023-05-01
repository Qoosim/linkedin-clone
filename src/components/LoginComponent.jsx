import React, { useState } from 'react'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'
import LinkedinLogo from '../assets/linkedinLogo.png';
import '../Sass/LoginComponent.scss';

export const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} alt="Linkedin Logo" className='linkedinLogo' />
      {/* <h1>LoginComponent</h1>
      <div className='auth-inputs'>
        <input 
          onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
          className='common-input'
          placeholder="Enter your email here..."
        />
         <input 
          onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
          className='common-input'
          placeholder="Enter your password here..."
        />
      </div>
      <button onClick={login} className='login-btn'>Login to linkedin</button> */}
    </div>
  )
}
