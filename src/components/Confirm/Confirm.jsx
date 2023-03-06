import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    createAt: new Date()
}
const Confirm = ({setIsBooking, checkInDate, checkOutDate, roomId, customerId, serviceRoom, totalBill}) => {
    const [formState, setFormState] = useState(initialValueForm)
    const dispatch = useDispatch()
    const idCuaPhong = Number(roomId.idRoom)
    const {room} = useSelector((state) => state.rooms)
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value,
            checkIn: checkInDate,
            checkOut: checkOutDate,
            customerId: customerId,
            roomId: idCuaPhong,
            service: serviceRoom,
            totalPayment: totalBill,
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