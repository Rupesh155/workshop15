import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <Link  to='/' >  
            <li>Home</li>
            </Link>
            <Link to='/about'> 
            <li>About</li>
            </Link>
            <li>Contact</li>

        </nav>
    </div>
  )
}

export default NavBar