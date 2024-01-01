import React from 'react'
import img1 from "../images/photo8.jpg";
import img2 from "../images/photo4.jpg";
import img3 from "../images/photo3.jpg";
import img4 from "../images/photo6.jpg";
import img5 from "../images/photo1.jpg";
import img6 from "../images/photo9.jpg";

const Photos = () => {

  return (
    <div className='photo-section'>
        <div className="container">
            <div className="photo-content">
                <div className="photo-content-center">
                <figure className='photo-card gallery-item-1'>
                    <img src={img1} alt="" />
                </figure>
                <figure className='photo-card gallery-item-2'>
                    <img src={img2} alt="" />
                </figure>
                <figure className='photo-card gallery-item-3'>
                    <img src={img3} alt="" />
                </figure>
                <figure className='photo-card gallery-item-4'>
                    <img src={img4} alt="" />
                </figure>
                <figure className='photo-card gallery-item-5'>
                    <img src={img5} alt="" />
                </figure>
                <figure className='photo-card gallery-item-6'>
                    <img src={img6} alt="" />
                </figure>


                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Photos