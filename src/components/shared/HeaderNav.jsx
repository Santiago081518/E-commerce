import React from 'react'
import { Link } from 'react-router-dom';
import './styles/headerNav.css'

const HeaderNav = () => {
  return (
    <div className='headerNav'>
      <h1><Link to='/'>E-commerce</Link></h1>
      <nav>
        <ul className='headerNav__list'>
          <li><Link to='/login'><i class='bx bx-user bx-sm'></i></Link></li>
          <li><Link to='/purchases'><i class='bx bx-box bx-sm' ></i></Link></li>
          <li><Link to='/cart'><i class='bx bx-cart bx-sm' ></i></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderNav;