import React from 'react'
import logo from "../images/banner.jpg";

const Header = () => {
  return (
    <div className='header'>
    <div className="container">
    <div className="nav-content">
        <img src={logo} alt="korxue banner" />
       <div className="music-div">
        <a href="#contact" className='contact-btn'>Contact</a>
        <a href="#music" className='music-btn'>Videos</a>
       </div>
    </div>
      <div className="header-content">
        
      <div className="content">
      <h2>Artist, Performer, Song Writer</h2>
        <h1>Korxue Yang</h1>
        <h2>Music only makes me stronger. Music speaks to the heart in ways words cannot express.</h2>
        <div className="book-div">
        <a href='#contact' className='book-btn'>Book Show</a>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Header