import React, { useState } from 'react'
import { LoginAPI, RegisterAPI } from '../api/AuthAPI'
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
      <h1>LoginComponent</h1>
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
      <button onClick={login} className='login-btn'>Login to linkedin</button>
    </div>
  )
}
