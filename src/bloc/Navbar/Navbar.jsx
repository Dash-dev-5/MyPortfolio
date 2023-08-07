import React, { useEffect } from 'react';
import { NavLink,Link } from "react-router-dom";
import { useState } from 'react';
import hum from '../../assets/hamb.svg'
import close from '../../assets/closes.svg'
import './Navbar.scss'
import logo from '../../assets/logo dash.svg';
// import u
import { useLocation } from 'react-router-dom';
function Navbar() {
  const history = useLocation();
  const [hamburger,setHamburger] = useState(true)
  const toggelHamburger = ()=>{setHamburger(!hamburger)}
  
  useEffect(() => {
    setHamburger(true);
  }, [history.pathname]);
  return <div className='bg-navbar'>
    <div className="bg-navbar__burg">
      {hamburger ? <img src={hum} onClick={toggelHamburger} className='bugericon'  alt="" /> : <img src={close}  className='bugericon'  onClick={toggelHamburger} alt="" /> }
    </div>
    <div className="bg-navbar__logo">
        <img src={logo} alt="" />
    </div>
    <div className={`bg-navbar__nav ${hamburger ? '':'visibleburg'}`}>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/About' className='link'>About</NavLink>
        <NavLink to='/Portfolio' className='link'>Portfolio</NavLink>
        <NavLink to='/Contact' className='link'>Contact us</NavLink>
    </div>
    <div className="bg-navbar__btn-round">
       <NavLink className='link' to="/Contact">Contact us</NavLink>
    </div>

  </div>
}

export default Navbar
