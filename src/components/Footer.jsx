import React from 'react'
import './Footer.css'
import footerMap from '../assets/Footer-Map.png'

function Footer() {
  return (
    <>
      <div className="mobile-wrapper">
        <p className="credits">
          © All Rights Reserved 2024 | Website developed by <a href="https://www.linkedin.com/in/arnavs27" target="_blank">Arnav Salian</a>
        </p>
      </div>

      <div className="desktop-bg">
        <div className="desktop-wrapper">
          <div className="desktop-container">
            <div className="footer-section">
              <p className='footer-title'>Quick Links</p>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Returns Policy</li>
                <li>Documentation</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="footer-section">
              <p className='footer-title'>Social Media</p>
              <ul>
                <li>Twitter X</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>YouTube</li>
                <li>LinkedIn</li>
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
    </>
  )
}

export default Footer