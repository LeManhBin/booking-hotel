import Modal from '../../components/Modal/Modal'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Confirm from '../../components/Confirm/Confirm'
import useScrollToTop from '../../hooks/useScrollToTop'
import { actFetchRoomById } from '../../redux/features/roomsSlice/roomsSlice'

import './DetailPage.scss'
import Rating from '../../components/Rating/Rating'
import Popup from '../../components/Popup/Popup'

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
    const {isLogged} = useSelector((state) => state.users)
    const [isShowPopUp, setIsShowPopUp] = useState(false)
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
    const [moneyDay, setMoneyDay]  = useState(0)
    const [breakFastMoney, setBreakFastMoney] = useState(0)
    const [pakingMoney, setPakingMoney] = useState(0)

    const [totalBill, setTotalBill] = useState(0)
    const parseIn = Date.parse(checkInDate)
    const parseOut = Date.parse(checkOutDate)

    const handleTinhNgay = () => {
        const timeDiff = parseIn - parseOut;
        const dayDiff = Math.ceil(Math.abs(timeDiff / (1000 * 3600 * 24)))
        const sizePerson = room.size
        const dayMoney = dayDiff * room.price
        const breakFastTotal = (dayDiff * 10) * sizePerson
        const pakingTotal = dayDiff * 6

        let bill
        if(breakFastChecked === true && parkingChecked === true) {
            bill = dayMoney + breakFastTotal + pakingTotal
        }else if(breakFastChecked === true && parkingChecked === false) {
            bill = dayMoney + breakFastTotal
        }else if(breakFastChecked === false && parkingChecked === true) {
            bill = dayMoney + pakingTotal
        }else if(breakFastChecked === false && parkingChecked === false){
            bill = dayMoney + 0
        }
        setDate(dayDiff)
        setMoneyDay(dayMoney)
        setBreakFastMoney(breakFastTotal)
        setPakingMoney(pakingTotal)
        setTotalBill(bill)
        console.log(dayDiff);
    }
    
    useEffect(() => {
        handleTinhNgay()
    },[checkOutDate, breakFastChecked, parkingChecked, pillowChecked])

    
    const dispatch = useDispatch()
    const param  = useParams()
    
    const {room} = useSelector((state) => state.rooms)

    const handleShowConfirm = (e) => {
        e.preventDefault()
        window.scrollTo(0,0)
        
        handleTinhNgay()
        if(isLogged === false) {
            setIsShowPopUp(true)
        }else {
            setIsBooking(true)
        }

    }
   
/*
    const handleOnChangeFormData = (e) => {
        const {name, value} = e.target
        const serviced = []
        if(breakFastChecked == true){
            serviced.push('a')
        } else if (parkingChecked == true) {
            serviced.push('b')
        } else if (pillowChecked == true) {
            serviced.push('c')
        }
        setFormState({
            ...formState,
            checkIn: checkInDate,
            checkOut: checkInDate,
            daysIn: date,
            breakFastChecked: breakFastChecked,
            parkingChecked: parkingChecked,
            pillowChecked: pillowChecked,
            service: serviced,
            totalBill: totalBill,  
        })
        console.log(formState, 'r');
    }
*/

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
                            <span>{date} night</span>
                            <span>${moneyDay||0}</span>
                        </div>  
                        {
                            breakFastChecked && 
                            (
                                <div className='detail__right--price-box-desc-detail'>
                                    <span>Breakfast a day per person</span>
                                    <span>${breakFastMoney}</span>
                                </div>
                            )
                        }
                        {
                            parkingChecked && 
                            (
                                <div className='detail__right--price-box-desc-detail'>
                                    <span>Parking</span>
                                    <span>${pakingMoney}</span>
                                </div>  
                            )
                        }
                        {
                            pillowChecked &&
                            (
                                <div className='detail__right--price-box-desc-detail'>
                                    <span>Extra pillow</span>
                                    <span>$0</span>
                                </div>  
                            )
                        }
                    </div>
                    <div className='detail__right--price-box-total'>
                        <span>Total Payment</span>
                        <span>${totalBill || 0}</span>
                    </div>
                </div>
                <div className='button-booking'>
                    <button className='book-btn' onClick={(e) => handleShowConfirm(e)}>Book Now</button>
                    {/* <button className='cart-btn'>Thêm Vào Danh Sách</button> */}
                </div>
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
        <div className='rating'>
            <h4>Reviews</h4>
            <Rating param={param}/>
        </div>
        {
            isShowPopUp && (<Popup setIsShowPopUp={setIsShowPopUp} title={"Vui lòng đăng nhập để thực hiện chức năng"}/>)
        }
    </div>
  )
}

export default DetailPage