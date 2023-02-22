import Modal from '../../components/Modal/Modal'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Confirm from '../../components/Confirm/Confirm'
import useScrollToTop from '../../hooks/useScrollToTop'
import { actFetchRoomById } from '../../redux/features/roomsSlice/roomsSlice'

import './DetailPage.scss'

const initialValueForm = {
    checkIn: '',
    checkOut: '',
    daysIn: 0,
    breakFastChecked: false,
    parkingChecked: false,
    pillowChecked: false,
    service: [],
    totalBill: 0,
}

const DetailPage = () => {
    useScrollToTop()
    const [isBooking, setIsBooking] = useState(false)
    const [openModal, setOpenModel] = useState(false)

    const [formState, setFormState] = useState(initialValueForm)
    const [breakFastChecked, setBreakFastChecked] = useState(false)
    const [parkingChecked, setParkingChecked] = useState(false)
    const [pillowChecked, setPillowChecked] = useState(false)
    
    const [date, setDate] = useState(0)
    const [checkInDate, setCheckInDate] = useState(new Date())
    const [checkOutDate, setCheckOutDate] = useState(new Date())

    const parseIn = Date.parse(checkInDate)
    const parseOut = Date.parse(checkOutDate)

    const handleTinhNgay = () => {
        const timeDiff = parseIn - parseOut;
        const dayDiff = Math.ceil(Math.abs(timeDiff / (1000 * 3600 * 24)));
        console.log(dayDiff, 'dayDiff');
    }

    console.log('break',breakFastChecked , 'parking', parkingChecked, 'pillow', pillowChecked);
    
    const dispatch = useDispatch()
    const param  = useParams()
    
    const {room} = useSelector((state) => state.rooms)

    // const room = useSelector((state) => state.rooms.allRooms.find(room => room.id === Number(param.idRoom)))
    const handleShowConfirm = (e) => {
        e.preventDefault()
        window.scrollTo(0,0)
        // setIsBooking(true)
        handleTinhNgay()

    }
   

    // const handleOnChangeFormData = (e) => {
    //     const {name, value} = e.target
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     })
    // }
    

   useEffect(() => {
        dispatch(actFetchRoomById(Number(param.idRoom)))
   },[])



  return (
    <div className='detail-page'>
        <div className='detail__container'>
            <div className='detail__left'>
                <div className="detail__left--img">
                    <div className='detail__left--img-main'>
                        <img src={room.imageMain} alt="" />
                    </div>
                    <div className='detail__left--img-child'>
                        {
                            room.imageSecondary?.map((image, index) => {
                                return(
                                    <div key={index}>
                                        <img src={image} alt="" />
                                    </div>
                                )
                           })   
                        }
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
                        <h2 className='heading'>{room.roomName}</h2>
                        <span>{room.typeRoom}</span>
                    </div>
                    <div className='detail__left--full'>
                        <span>Description</span>
                        <p>
                            {room.description}
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


            <form className='detail__right'>

                <span className='detail__right--price'><b>${room.price}</b>/night</span>
                
                <div className='detail__right--checking'>
                    <div className='detail__right--checking-input'>
                        <label>Check in</label>
                        <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}/>
                    </div>
                    <div className='detail__right--checking-input'>
                        <label>Check out</label>
                        <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}/>
                    </div>
                </div>
                <div className='detail__right--checkbox'>
                    <div className='detail__right--checkbox-input'>
                        <span>Extra Features</span>
                        <span><i className="fa-solid fa-minus"></i></span>
                    </div>
                    <div className='detail__right--checkbox-input'>
                        <div className='checkbox'>
                            <input type="checkbox" checked={breakFastChecked} onChange={(e) => setBreakFastChecked(e.target.checked)}/>
                            <label htmlFor="">Breakfast a day per person</label>
                        </div>
                        <label htmlFor=''>$10</label>
                    </div>
                    <div className='detail__right--checkbox-input'>
                        <div className='checkbox'>
                            <input type="checkbox" checked={parkingChecked} onChange={(e) => setParkingChecked(e.target.checked)}/>
                            <label htmlFor="">Parking a day</label>
                        </div>
                        <label>$6</label>
                    </div>
                    <div className='detail__right--checkbox-input'>
                        <div className='checkbox'>
                            <input type="checkbox" checked={pillowChecked} onChange={(e) => setPillowChecked(e.target.checked)}/>
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
                <button className='book-btn' onClick={(e) => handleShowConfirm(e)}>Book Now</button>
                <span className='remind'>You will not get changed yet</span>
            </form>
            <div className='confirm'>
                {
                    isBooking && (<Confirm setIsBooking={setIsBooking} setOpenModel={setOpenModel}/>)
                }
            </div> 
        </div>
        {
            openModal && (<Modal setOpenModel={setOpenModel}/>)
        }
    </div>
  )
}

export default DetailPage