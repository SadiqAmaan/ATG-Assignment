import React from 'react'
import lgBanner from '../Assets/Main-Image.png'
const Banner = () => {
  return (
    <div className='banner'>
      <img src={lgBanner} alt="" />
      <div className="text">
        <h2>Computer Engineering</h2>
        <h4>142,765 Computer Engineers follow this</h4>
      </div>
    </div>
  )
}

export default Banner
