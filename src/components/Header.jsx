import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
    <div className="container">  
      <div className="header-content">       
      <div className="content">
      <h2>Artist, Performer, Song Writer</h2>
        <h1>Korxue Yang</h1>
        <h2 className='text-font'>Music only makes me stronger. Music speaks to the heart in ways words cannot express.</h2>
        <div className="book-div">
          <Link to="/contact" className='book-btn'>Book Me</Link>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Header