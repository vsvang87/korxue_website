import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import {Link} from "react-router-dom"

const Banner = () => {
  return (
    <div className='banner-section'>
        <div className="container">
            <div className="banner-content">
            <FaFacebookSquare className='facebook-icon'/>
            <h1>Follow Me On Facebook</h1>
            <div className="btn-div">
            <Link to="https://www.facebook.com/korxue" className='follow-me-btn'>Follow Me</Link>
            <Link to="/contact" className='follow-me-btn'>Book Me</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner