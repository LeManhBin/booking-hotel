import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Confirm from '../../components/Confirm/Confirm'
import './DetailPage.scss'

const DetailPage = () => {
    const [isBooking, setIsBooking] = useState(false)

    const handleShowConfirm = () => {
        setIsBooking(true)
    }
   const param  = useParams()

  return (
    <div className='detail-page'>
        <div className='detail__container'>
            <div className='detail__left'>
                <div className="detail__left--img">
                    <div className='detail__left--img-main'>
                        <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className='detail__left--img-child'>
                        <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>

                <div className='detail__left--desc'>
                    <div className='evaluate'>
                        <span><b>5.0</b>Perfect</span>
                        <span>Hotels</span>
                        <span>New Building</span>
                        <span>Top Value</span>
                        <span>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </span>
                    </div>
                    <div className="detail__left--desc-title">
                        <h2 className='heading'>Phòng super Vip pro Max</h2>
                        <span>Royal</span>
                    </div>
                    <div className='detail__left--full'>
                        <span>Description</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora dolore odit dignissimos doloribus aliquid nesciunt asperiores cupiditate assumenda laboriosam? Et cumque libero odit dolorum voluptatum numquam exercitationem illo consectetur?
                        </p>
                    </div>
                    <div className='detail__left--features'>
                        <span className='feature-title'>Hotels feature</span>
                        <div className='feature-desc'>
                            <div className='feature'>
                                <i className="fa-solid fa-wifi"></i>
                                <span>Wi-Fi</span>
                            </div>
                            <div className='feature'>
                                <i className="fa-solid fa-bath"></i>
                                <span>BathUp</span>
                            </div>
                            <div className='feature'>
                                <i className="fa-solid fa-bed"></i>
                                <span>Kings Bed</span>
                            </div>
                            <div className='feature'>
                                <i className="fa-solid fa-utensils"></i>
                                <span>Breakfast</span>
                            </div>
                            <div className='feature'>
                                <i className="fa-solid fa-water-ladder"></i>
                                <span>Pool</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='detail__right'>

                <span className='detail__right--price'><b>$100</b>/night</span>
                
                <div className='detail__right--checking'>
                    <div className='detail__right--checking-input'>
                        <label>Check in</label>
                        <input type="date" />
                    </div>
                    <div className='detail__right--checking-input'>
                        <label>Check out</label>
                        <input type="date" />
                    </div>
                </div>
                <div className='detail__right--checkbox'>
                    <div className='detail__right--checkbox-input'>
                        <span>Extra Features</span>
                        <span><i className="fa-solid fa-minus"></i></span>
                    </div>
                    <div className='detail__right--checkbox-input'>
                        <div className='checkbox'>
                            <input type="checkbox" checked/>
                            <label htmlFor="">Breakfast a day per person</label>
                        </div>
                        <label htmlFor=''>$10</label>
                    </div>
                    <div className='detail__right--checkbox-input'>
                        <div className='checkbox'>
                            <input type="checkbox"/>
                            <label htmlFor="">Parking a day</label>
                        </div>
                        <label>$6</label>
                    </div>
                    <div className='detail__right--checkbox-input'>
                        <div className='checkbox'>
                            <input type="checkbox"/>
                            <label htmlFor="">Extra pillow</label>
                        </div>
                        <label>free</label>
                    </div>
                </div>

                <div className='detail__right--price-box'>
                    <span className='heading'>Price</span>
                    <div className='detail__right--price-box-desc'>
                        <div className='detail__right--price-box-desc-detail'>
                            <span>1 night</span>
                            <span>$100</span>
                        </div>  
                        <div className='detail__right--price-box-desc-detail'>
                            <span>Breakfast a day per person</span>
                            <span>$10</span>
                        </div>  
                        <div className='detail__right--price-box-desc-detail'>
                            <span>Service fee</span>
                            <span>$5</span>
                        </div>  
                    </div>
                    <div className='detail__right--price-box-total'>
                        <span>Total Payment</span>
                        <span>$115</span>
                    </div>
                </div>
                <button className='book-btn' onClick={() => handleShowConfirm()}>Book Now</button>
                <span className='remind'>You will not get changed yet</span>
            </div>
            <div className='confirm'>
                {
                    isBooking && (<Confirm setIsBooking={setIsBooking}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default DetailPage