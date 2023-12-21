import React from 'react'
import bioPic from '../images/biopic.jpg'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="container">
            <div className="hero-content">
                <div className="hero-about col">
                    <img src={bioPic} alt="picture of me" />
                </div>
                <div className="hero-about col">
                    <h1>Bio</h1>
                    <p>A highly motivated artist. Born in Milwaukee, WI, Korxue rose to stardom in late 2010.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero