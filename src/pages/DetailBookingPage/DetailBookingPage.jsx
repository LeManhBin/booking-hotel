import React from 'react'
import './DetailBookingPage.scss'
const DetailBookingPage = () => {
  return (
    <div className='detail-booking'>
      <div  className='detail-form'>
          <h3>Thông tin đặt phòng</h3>
          <div className='detail-info'>
              <p className='title'>Tên Người Đặt:</p>
              <p>Lê Mạnh Bin</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Email:</p>
              <p>llemanhbin@gmail.com</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Số Điện Thoại:</p>
              <p>0365160460</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Tên Phòng:</p>
              <p>101</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Loại:</p>
              <p>Vip</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Số người ở:</p>
              <p>2</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Giá:</p>
              <p>200</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Check In:</p>
              <p>200</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Check Out:</p>
              <p>200</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Số Ngày ở:</p>
              <p>200</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Dịch Vụ Đi Kèm:</p>
              <p>sadas</p>
          </div>
          <div className='detail-info'>
              <p className='title'>Tổng Tiền:</p>
              <p>12000</p>
          </div>
      </div>
    </div>
  )
}

export default DetailBookingPage