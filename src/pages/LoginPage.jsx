import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import './styles/loginPage.css'

const LoginPage = () => {

  const [isLogin, setIsLogin] = useState(true)
  const createToken = useAuth();

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    createToken(url, data)
    reset({
      email: '',
      password: '',
    })
    setIsLogin(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogin(true)
  }

  return (
    <div>
      {
        isLogin ?
        <div className='loginPage'>
          <form className='form__loginPage' onSubmit={handleSubmit(submit)}>
            <p>Welcome! Enter your email and password to continue</p>
            <div className='form__camps'>
              <label htmlFor="user">Email</label>
              <input {...register('email')} id='user' type="email" />
            </div>
            <div className='form__camps'>
              <label htmlFor="key">Password</label>
              <input {...register('password')} id='key' type="password" />
            </div>
            <button>Login</button>
          </form>
          <p>Don't have an account? <Link to='/register'> <span>Register Here</span></Link></p>
        </div> :
        <div className='div__logout'>
          <button className='btn__logout' onClick={handleLogout}>Logout</button>
        </div>
      }
    </div>
  )
}

export default LoginPage;