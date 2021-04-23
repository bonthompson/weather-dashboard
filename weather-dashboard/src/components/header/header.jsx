import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => (
  <div className='header'>
    <Link className='option' to='/'>Dashboard</Link>
    <Link className='option' to='/settings'>Settings</Link>
  </div>
)
export default Header
