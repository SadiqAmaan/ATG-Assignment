import React from 'react'

import Logo from "../Assets/Logo.png";
import search from "../Assets/Search.svg";
import DA from "../Assets/DA.png";



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
       
      </div>
      <div className="input">
        <img src={search} alt="" />
        <input type="text"  placeholder=' Search your favourite groups in ATG '/>
      </div>
      <div className="account">
        <h2>Create Account. <a href="#">It's Free</a></h2>
        <img src={DA} alt="" />
      </div>
    </div>
  )
}

export default Navbar
