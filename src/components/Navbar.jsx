import React from 'react'
import logo from '../Assets/weather icon.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        
        <div className="nav">
      <img src={logo} alt="" />
      <h1>Weather Web</h1>
    </div>
    </div>
  )
}

export default Navbar
