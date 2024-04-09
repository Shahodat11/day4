import React from 'react'
import Logo from '../images/грузовик.svg'
import '../header/header.css'

function Header() {
  return (
    <>
    <div className="container">
      <div className="nav-link">
        <div className="nav">
          <img src={Logo} alt="" />
        </div>
        <div className="nav2">
          <ul className="nav-items" id="navbar-responsive">
            <li>
              <a href="./index.html">Home </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="./pages/login.html">Sign in</a>
            </li>
          </ul>
        </div>
      </div>    
    </div>
    </>
  )
}

export default Header