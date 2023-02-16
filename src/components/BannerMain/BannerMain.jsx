import React from 'react'
import CheckAvailability from '../CheckAvailability/CheckAvailability'
import './BannerMain.scss'

const BannerMain = ({color, colorH4}) => {
  return (
    <div className='banner-container'>
        <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <CheckAvailability color={color} colorH4={colorH4}/>
    </div>
  )
}

export default BannerMain