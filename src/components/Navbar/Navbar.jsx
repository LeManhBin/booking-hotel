import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actLogout } from '../../redux/features/usersSlice/usersSlice'
import './Navbar.scss'

const Navbar = () => {
  const [logoutAdmin, setLogoutAdmin] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(actLogout())
    navigate('/login-layout')
  }
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="items">
          <div className="item">
            <i className="fa-solid fa-language"></i>
            VietNam
          </div>
          <div className="item">
            <i className="fa-solid fa-moon"></i>    
          </div>
          <div className="item">
            <i className="fa-solid fa-grip-lines"></i>
          </div>
          <div className="item">
            <i className="fa-solid fa-bell"></i>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <i className="fa-solid fa-comment"></i>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <i className="fa-solid fa-list-ul"></i>
          </div>
          <div className="item">
            <img src="https://kiemtientuweb.com/ckfinder/userfiles/images/anh-rose/rose-2.jpg" 
            alt="" 
            className='avatar'
            onClick={() => setLogoutAdmin(!logoutAdmin)}
            />
            {
              logoutAdmin && (<span className='logout' onClick={handleLogout}>
              Log Out
          </span>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar