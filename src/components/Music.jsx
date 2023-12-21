import React from 'react'
import ReactPlayer from 'react-player'


const Music = () => {

  return (
    <div className='music-section' id='music'>
      <div className="container">
      <p>Videos</p>
        <div className="music-content">
          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=GMQg2vBJaa4'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=ibG4ykqg5Go'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=jo8Dib_bTgQ'/>
          </div>

          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=C5uRwMWDQpc'/>
          </div>

          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=u9-iGjJezLY'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=ka52PgVG0KI'/>
          </div>

          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=DJF2g2JW62w'/>
          </div>
          <div className="music-card col">
          <ReactPlayer width='480px' height='240px' url='https://www.youtube.com/watch?v=s7ImDn4Y2ag'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music