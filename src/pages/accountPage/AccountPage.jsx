import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './AccountPage.scss'
const AccountPage = () => {
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.users)
    console.log(user,'user bên account');
    const handleChangeProfilePage = () => {
        navigate("/account/profile")
    }

    const handleLogout = () => {
      navigate('/login-layout')
    }
  return (
    <div className='account'>
        <div className='account__img'>
            <img src={user.image} alt="" />
        </div>
        <div className='account__detail'>
            <h3>{user.userName}</h3>
            <div className='account__detail--action'>
              <button onClick={handleChangeProfilePage}>Edit Profile</button>
              <div className='account-act'>
                <button className='act-account'><i className="fa-solid fa-ellipsis"></i></button>
                <span className='logout-btn' onClick={handleLogout}>Logout</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AccountPage