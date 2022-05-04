import React from 'react'
import { Link } from '../../atoms'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <Link className='logo-app' to='/' title="Mern Blog" />
        <Link className='menu-item' to='/login' title="Logout" />    </div>
  )
}

export default Header