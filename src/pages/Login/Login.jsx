import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='login-page'>
      <div className='form-container'>
        <h1 className='form-heading'>Sign in</h1>
        <form className='login-form'>
          <input type='email' name='user-mail' placeholder='Email' required />
          <input
            type='password'
            name='user-pass'
            placeholder='Password'
            required
          />
          <button name='form-btn'>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
