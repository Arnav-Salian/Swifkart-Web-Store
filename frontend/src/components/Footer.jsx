import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faShop, faFileCircleCheck, faCartShopping, faRightToBracket, faUserLarge, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      

      <div className="desktop-bg">
        <div className="desktop-wrapper">
          <div className="desktop-container">
            <div className="footer-section">
              <p className='footer-title'>Quick Links</p>
              <ul>
                <Link to=""><li><FontAwesomeIcon className='footer-icons' icon={faShop}/>Store</li></Link>
                <Link to="/orders"><li><FontAwesomeIcon className='footer-icons' icon={faFileCircleCheck}/>Previous Orders</li></Link>
                <Link to="/cart"><li><FontAwesomeIcon className='footer-icons' icon={faCartShopping}/>Shopping Cart</li></Link>
                <Link to="/login"><li><FontAwesomeIcon className='footer-icons' icon={faRightToBracket}/>Login</li></Link>
                <Link to="/register"><li><FontAwesomeIcon className='footer-icons' icon={faUserLarge}/>Register</li></Link>
              </ul>
            </div>
            <div className="footer-section">
              <p className='footer-title'>Social Media</p>
              <ul>
                <a href="https://twitter.com/redbull" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faXTwitter}/>Twitter X</li></a>
                <a href="https://www.instagram.com/redbull/" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faInstagram}/>Instagram</li></a>
                <a href="https://www.facebook.com/redbull" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faFacebook}/>Facebook</li></a>
                <a href="https://www.youtube.com/user/redbull" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faYoutube}/>YouTube</li></a>
                <a href="https://www.linkedin.com/company/red-bull/" target='_blank'><li><FontAwesomeIcon className='footer-icons' icon={faLinkedin}/>LinkedIn</li></a>
              </ul>
            </div>
            <div className="footer-section">
              <p className='footer-title'>Find Us</p>
              <p className='footer-address'>
                The University of Leicester, <br />
                University Road, <br />
                Leicester, <br />
                LE1 7RH, <br />
                United Kingdom <br />
                <br />
                <a href="https://www.google.com/maps/place/University+of+Leicester/@52.6211393,-1.1272074,17z/data=!3m1!4b1!4m6!3m5!1s0x4877612fa55d947f:0xf8da17fed74e0044!8m2!3d52.6211393!4d-1.1246325!16zL20vMDF6bjR5?entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D" target='_blank'><FontAwesomeIcon className='footer-icons' icon={faMapLocationDot}/>View on Google Maps</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-wrapper">
        <p className="credits">
          © {currentYear} All Rights Reserved | Website developed by <a href="https://www.linkedin.com/in/arnavs27" target="_blank">Arnav Salian</a>
        </p>
      </div>
    </>
  )
}

export default Footer