import React from 'react'
import ReactPlayer from 'react-player'
import VIDEOS from "./musicData.js"

const Music = () => {

  return (
    <div className='music-section' id='music'>
      <div className="container">
      
        <div className="music-content">
          {VIDEOS.map((item) => (
            <div key={item.id} className='music-card'>
              <ReactPlayer width="100%" height="300px" url={item.url}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Music