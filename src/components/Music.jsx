import React from 'react'
import ReactPlayer from 'react-player'


const Music = ({videos}) => {

  return (
    <div className='music-section' id='music'>
      <div className="container">
      <p>Videos</p>
        <div className="music-content">
          {videos.map((item) => (
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