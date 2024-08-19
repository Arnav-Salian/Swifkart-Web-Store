import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

function Error404() {
  return (
    <>
        <div className="error-page-wrapper">
            <div className="error-container">
                <p className='error-404'>Error 404</p>
                <p className='page-not-found'>Page Not Found</p>
                <Link to="/"><button>Return to Homepage</button></Link>
            </div>
            <div className="error-spacer"></div>
        </div>
    </>
  )
}

export default Error404