import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <Link  to='/' >  
            <li>Home</li>
            </Link>
            <Link to='/signup'> 
            <li>SignUp</li>
            </Link>
           <Link to={'/login'}>
            <li>Login</li>
            </Link>

        </nav>
    </div>
  )
}

export default NavBar