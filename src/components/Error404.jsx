import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <>
        <p>Error 404</p>
        <p>Page Not Found</p>

        <Link to="/"><button>Return to Homepage</button></Link>
    </>
  )
}

export default Error404