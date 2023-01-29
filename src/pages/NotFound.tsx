import React from 'react'
import { Link } from 'react-router-dom'



const NotFound = () => {
  return (
    <div>
      Unfortunatly, the page you are looking for does not exist.
      But you can always go back to the <Link to="/">Home Page</Link>
    </div>
  )
}
export default NotFound