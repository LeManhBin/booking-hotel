import React, { useState } from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const styleActive = ({isActive}) => {
      return {
        color: isActive ? '#B99B6B' : '#000'
      }
  }
  return (
    <header className='header'>
        <div className='header__logo'>
            <h2>Logo</h2>
        </div>
        <div className='header__navbar'>
            <div className='header__contact'>
                <p className='header__contact--phone'><span>Call Us. <b>(+84)365160470</b></span></p>
                <ul className='header__contact--language'>
                  <li>Languages <i className="fa-solid fa-chevron-down"></i>
                    <ul className='country'>
                      <li>VietNam</li>
                      <li>English</li>
                    </ul>
                  </li>
                </ul>
                <div className='header__contact--social'>
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-square-instagram"></i>
                </div>
            </div>
            <div className='header__navbar--link'>
                <ul>
                  <li><NavLink style={styleActive} to={"/"}>HOME</NavLink></li>
                  <li><NavLink style={styleActive} to={"/rooms"}>ROOMS</NavLink></li>
                  <li><NavLink style={styleActive} to={"/reservation"}>RESERVATION</NavLink></li>
                  <li><NavLink style={styleActive} to={"/about"}>ABOUT US</NavLink></li>
                  <li><NavLink style={styleActive} to={"/blog"}>BLOG</NavLink></li>
                  <li><NavLink style={styleActive} to={"/contact"}>CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
        <div className='header__navbar--btn'>
            <span onClick={handleToggle}> 
               {
                toggle ? (<i className="fa-solid fa-x open"></i>)
                : (<i className="fa-solid fa-bars close"></i>)
               }
            </span>
        </div>
    </header>
  )
}

export default Header