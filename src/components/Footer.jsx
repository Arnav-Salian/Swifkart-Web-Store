import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footerMap from '../assets/Footer-Map.png'

function Footer() {
  return (
    <>
      

      <div className="desktop-bg">
        <div className="desktop-wrapper">
          <div className="desktop-container">
            <div className="footer-section">
              <p className='footer-title'>Quick Links</p>
              <ul>
                <Link to=""><li>Terms and Conditions</li></Link>
                <Link to=""><li>Privacy Policy</li></Link>
                <Link to=""><li>Returns Policy</li></Link>
                <Link to=""><li>Documentation</li></Link>
                <Link to=""><li>Sitemap</li></Link>
              </ul>
            </div>
            <div className="footer-section">
              <p className='footer-title'>Social Media</p>
              <ul>
                <a href="" target='_blank'><li>Twitter X</li></a>
                <a href="" target='_blank'><li>Instagram</li></a>
                <a href="" target='_blank'><li>Facebook</li></a>
                <a href="" target='_blank'><li>YouTube</li></a>
                <a href="" target='_blank'><li>LinkedIn</li></a>
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
                <a href="" target='_blank'>View on Google Maps</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-wrapper">
        <p className="credits">
          © All Rights Reserved 2024 | Website developed by <a href="https://www.linkedin.com/in/arnavs27" target="_blank">Arnav Salian</a>
        </p>
      </div>
    </>
  )
}

export default Footer