import React, { useState } from 'react'
import './Header.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Favorites from '../Favorites/Favorites'
const Header = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [isShowFavorite, setIsShowFavorite] = useState(false)
  const {isLogged, user} = useSelector((state) => state.users)
  // const {user} = useSelector((state) => state.user)
  console.log('user bên user', user);
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleShowFavorite = () => {
    setIsShowFavorite(!isShowFavorite)
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
            {/* <div className='header__navbar--cart'>
              <NavLink style={styleActive} onClick={handleToggle} to={"/cart-booking"}><i className="fa-solid fa-suitcase-rolling"></i></NavLink>
              <span className='number-cart'>1</span>
            </div> */}
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
            <div className={ toggle ? 'header__navbar--link' : 'header__navbar--link close'}>
                <ul>
                  <li><NavLink style={styleActive} onClick={() => setToggle(false)} to={"/"}>HOME</NavLink></li>
                  <li><NavLink style={styleActive} onClick={() => setToggle(false)} to={"/rooms"}>ROOMS</NavLink></li>
                  <li><NavLink style={styleActive} onClick={() => setToggle(false)}  to={"/reservation"}>RESERVATION</NavLink></li>
                  <li><NavLink style={styleActive} onClick={() => setToggle(false)} to={"/about"}>ABOUT US</NavLink></li>
                  <li><NavLink style={styleActive} onClick={() => setToggle(false)} to={"/blog"}>BLOG</NavLink></li>
                  <li><NavLink style={styleActive} onClick={() => setToggle(false)} to={"/contact"}>CONTACT</NavLink></li>
                  {/* <li><NavLink style={styleActive} onClick={() => setToggle(false)} className="cart" to={"/cart-booking"}><i className="fa-solid fa-suitcase-rolling"></i><span className='cart-number'>1</span></NavLink></li> */}
                  {/* <li className='li-cart'>
                    <p onClick={handleShowFavorite} className="cart" >
                      <i className="fa-solid fa-suitcase-rolling"></i>
                      <span className='cart-number'>1</span>
                    </p>
                    <div className='favorite'>
                        {
                          isShowFavorite && (<Favorites/>)
                        }
                  </div>
                  </li> */}
                  {
                    isLogged ? (<li><NavLink to={"/account"}><span className='header-avatar'><img src={user?.image} alt="" /></span></NavLink></li>) 

                    : (<li><NavLink style={styleActive} onClick={() => setToggle(false)} to={"/login-layout"}><span>LOGIN</span></NavLink></li>)
                  }
                  
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