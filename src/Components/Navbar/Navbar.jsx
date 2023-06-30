import React from 'react'
import css from '../../app.css';
import avatar from '../../assets/netflixavatar.png'
import logo from '../../assets/netflixlogo.png'

function Navbar() {
  return (
    <div className='nav false'>
      <img className='nav_logo' src={logo} alt="" />
      <img className='nav_avatar' src={avatar} alt="" />
      </div>
  )
}

export default Navbar