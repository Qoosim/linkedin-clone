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
      <div className="inner-wrapper">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world.</p>
      
        <div className='auth-inputs'>
          <input 
            onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
            type="email"
            className="common-input"
            placeholder="Enter or Phone"
          />
          <input 
            onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className='login-btn'>Sign in</button>
      </div>
      <hr className="hr-text" data-content="OR" />
    </div>
  )
}
