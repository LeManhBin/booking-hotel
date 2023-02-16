import React from 'react'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import CheckAvailability from '../../components/CheckAvailability/CheckAvailability'
import './ReservationPage.scss'
const ReservationPage = () => {
  return (
    <div className='reservation'>
        <div className='reservation-banner'>
            <BannerDefine title={"Reservation"}/>
        </div>
        <div className='reservation-container'>
            <div className='heading'>
                <h2>Check Availability</h2>
            </div>
            <div className='check-availability'>
                <CheckAvailability color={'#fff'}/>
            </div>
            <div className='instruct'>
                <div className='instruct__left'>
                    <h3 className='instruct__title'>How do I make reservations</h3>
                    <div className='instruct__left--detail'>
                        <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</span>
                        <span>The Hotel</span>
                    </div>
                </div>
                <div className='instruct__right'>
                    <h3 className='instruct__title'>Reservation Support</h3>
                    <div className='instruct__right--detail'>
                        <p>
                          <b>Address</b>
                          <span className='address'>Đ. Nam Kỳ Khởi Nghĩa, Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng</span>
                        </p>
                        <p>
                          <b>Telephone</b>
                          <span>(+84) 365160470</span>
                        </p>
                        <p>
                          <b>Toll Free</b>
                          <span>(+84) 365160470</span>
                        </p>
                        <p>
                          <b>Email</b>
                          <span>llemanhbin@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReservationPage