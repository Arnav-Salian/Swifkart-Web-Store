import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import swifkartLogo from '../assets/Swifkart-Logo.png'
import './NavBar.css'

function NavBar() {
  return (
    <>
      <div className="header-bg">
        <nav className='nav-bar'>
          <div className="nav-bar-container">
            <div className="logo-container">
              <Link to="/"><img className='logo' src={swifkartLogo} alt="" draggable="false"/></Link>
            </div>
            <Link to="/cart">
              <div className="cart-icon-container">
                <FontAwesomeIcon className='cart-icon' icon={faCartShopping}/>
                <div className="cart-quantity">
                  <p>2</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </div>
      
    </>
  )
}

export default NavBar