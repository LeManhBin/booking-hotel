import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllBanner } from '../../redux/features/bannerSlice/bannerSlice'
import CheckAvailability from '../CheckAvailability/CheckAvailability'
import './BannerMain.scss'

const BannerMain = ({color, colorH4}) => {
  const dispatch =useDispatch()
  const {banner} = useSelector((state) => state.banner)

  useEffect(() => {
    dispatch(actFetchAllBanner())
  },[])


  return (
    <div className='banner-container'>
        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <CheckAvailability color={color} colorH4={colorH4}/>
    </div>
  )
}

export default BannerMain