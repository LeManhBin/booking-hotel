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
        <img src={banner[0].banner} alt="" />
        <CheckAvailability color={color} colorH4={colorH4}/>
    </div>
  )
}

export default BannerMain