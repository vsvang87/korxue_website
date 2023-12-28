import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <nav>
                <div className="head">
                    <p><Link to="/" >Korxue Y.</Link></p>
                </div>
                <ul className='nav-links'>
                    <li><NavLink to="/music" className={({isActive}) => isActive ? "active" : ""}>Music + Videos</NavLink></li>
                    <li><NavLink to="/performance">Performance</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar