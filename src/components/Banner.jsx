import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='banner-section'>
        <div className="container">
            <div className="banner-content">
                <div className="content">
                <FaSquareFacebook className='facebook-icon'/>
                <h1>Follow Me On Facebook</h1>
                <p>Catch new tunes and features</p>
                <a href="https://www.facebook.com/korxue" target='_blank'>Follow Me</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner