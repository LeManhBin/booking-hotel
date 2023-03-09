import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actCreateBooking } from '../../redux/features/bookingsSlice/bookingsSlice'
import { actFetchRoomById, actUpdateRoom } from '../../redux/features/roomsSlice/roomsSlice'
import './Confirm.scss'

const initialValueForm = {
    checkIn: '',
    checkOut: '',
    customerId:'',
    roomId:'',
    name: '',
    email: '',
    phone: '',
    service: [],
    totalPayment: 0,  
    status: 1,
    createAt: ''
}
const Confirm = ({setIsBooking, checkInDate, checkOutDate, roomId, customerId, serviceRoom, totalBill}) => {
    const navigate = useNavigate()
    const moment = require('moment');
    const [formState, setFormState] = useState(initialValueForm)
    const dispatch = useDispatch()
    const idCuaPhong = Number(roomId.idRoom)
    const {room} = useSelector((state) => state.rooms)
    const dateStr = new Date();
    const formattedCreateAt = moment(dateStr).format("YYYY-MM-DD");
    const formattedCheckIn = moment(checkInDate).format("YYYY-MM-DD");
    const formattedCheckOut = moment(checkOutDate).format("YYYY-MM-DD");
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value,
            checkIn: formattedCheckIn,
            checkOut: formattedCheckOut,
            customerId: customerId,
            roomId: idCuaPhong,
            service: serviceRoom,
            totalPayment: totalBill,
            createAt: formattedCreateAt
        })
    }
    useEffect(() => {
        dispatch(actFetchRoomById(idCuaPhong))
    },[idCuaPhong])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actCreateBooking(formState))
        setIsBooking(false)
        const newRoom = {
            ...room,
            status: 2,
        }
        dispatch(actUpdateRoom(idCuaPhong, newRoom))
        navigate('/')
    }
  return (
    <div className='confirm-container'>
        <h3>Please confirm the information</h3>
        <i className="fa-solid fa-x" onClick={() => setIsBooking(false)}></i>
        <div className='confirm-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label>Full Name</label>
                    <input type="text" placeholder='enter your full name' name='name' onChange={handleChange}/>
                </div>
                <div className='form-input'>
                    <label>Phone Number</label>
                    <input type="text" placeholder='enter your phone number' name='phone' onChange={handleChange}/>
                </div>
                <div className='form-input'>
                    <label>Email</label>
                    <input type="email" placeholder='enter your email' name='email' onChange={handleChange}/>
                </div>
                <button type='submit'>Confirm</button>
            </form>
        </div>
    </div>
  )
}

export default Confirm