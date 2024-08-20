import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Esther Maina</span>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portifolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">connect with me</div>
    </div>
  )
}

export default Navbar