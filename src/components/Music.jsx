import React from 'react'
import ReactPlayer from 'react-player'


const Music = () => {

  return (
    <div className='music-section' id='music'>
      <div className="container">
      <p>Videos</p>
        <div className="music-content">
          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=GMQg2vBJaa4' className='video'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=ibG4ykqg5Go' className='video'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=jo8Dib_bTgQ' className='video'/>
          </div>

          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=C5uRwMWDQpc' className='video'/>
          </div>

          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=u9-iGjJezLY' className='video'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=ka52PgVG0KI' className='video'/>
          </div>

          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=DJF2g2JW62w' className='video'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width="350px" height="300px" url='https://www.youtube.com/watch?v=s7ImDn4Y2ag' className='video'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music