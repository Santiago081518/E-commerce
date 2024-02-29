import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/registerPage.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

  const createUser = useAuth();

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url,data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    })
  }

  return (
    <div className='registerPage'>
      <form className='form__registerPage' onSubmit={handleSubmit(submit)}>
          <p>Sign Up</p>
          <div className='form__camps'>
            <label htmlFor="firstname">First Name</label>
            <input {...register('firstName')} id='firstname' type="text" />
          </div>
          <div className='form__camps'>
            <label htmlFor="lastName">Last name</label>
            <input {...register('lastName')} id='lastName' type="text" />
          </div>
          <div className='form__camps'>
            <label htmlFor="email">email</label>
            <input {...register('email')} id='email' type="email" />
          </div>
          <div className='form__camps'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} id='password' type="password" />
          </div>
          <div className='form__camps'>
            <label htmlFor="phone">Phone</label>
            <input {...register('phone')} id='phone' type="number" />
          </div>
          <button>Submit</button>
      </form>
      <p>Already have an account? <Link to='/login'><span>Log in</span></Link></p>
    </div>
  )
}

export default RegisterPage;