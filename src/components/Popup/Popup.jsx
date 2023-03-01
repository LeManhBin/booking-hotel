import React from 'react'
import { useNavigate } from 'react-router-dom'
import './popup.scss'
const Popup = ({setIsShowPopUp, title}) => {
    const navigate = useNavigate()
    const handleContinue = () => {
        navigate('/login-layout')
    }
  return (
    <div className='popup-container'>
        <div className='title'>
            {title}
        </div>
        <div className='action'>
            <button onClick={() => setIsShowPopUp(false)}>Cancel</button>
            <button onClick={() => handleContinue()}>Continue</button>
        </div>
    </div>
  )
}

export default Popup