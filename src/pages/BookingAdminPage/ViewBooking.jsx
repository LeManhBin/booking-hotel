import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { actFetchBookingById } from '../../redux/features/bookingsSlice/bookingsSlice'
import { actFetchRoomById } from '../../redux/features/roomsSlice/roomsSlice'
import { actFetchUserByID } from '../../redux/features/usersSlice/usersSlice'

const ViewBooking = () => {
    const {booking} = useSelector((state) => state.bookings)
    const {user} = useSelector((state) => state.users)
    const {room} = useSelector((state) => state.rooms)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const param = useParams()
    console.log(room, 'aaaa');
    console.log(Number(param.idBooking), 'PARAM');
    useEffect(() => {

        dispatch(actFetchBookingById(Number(param.idBooking)))
    },[])

    useEffect(()=>{
      if(Object.keys(booking).length ===0) return
      dispatch(actFetchRoomById(booking.roomId))
      dispatch(actFetchUserByID(booking.customerId))
    }, [booking])

    const handleBack = () => {
        navigate('/admin/booking')
    }
    // let service = booking.service.join(" - ")
    // console.log(service);

  return (
    <div className='view-container'>
        <div className='heading'>
              <h3>Booking Detail</h3>
              <button onClick={handleBack}>Back</button>
        </div>
        <div>
        <div className='main__table'>
              <div className='table__container' >
                <table id="customers">
                  <thead className='head-view'>
                    <tr>
                      <th>ID</th>
                      <th>Room Name</th>
                      <th>Customer Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Service</th>
                      <th>Total Payment</th>
                      <th>Create At</th>
                    </tr>
                  </thead>
                  <tbody className='view'>
                      <tr>
                        <td>{booking.id}</td>
                        <td>{room.roomName}</td>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.phone}</td>
                        <td>{booking.checkIn}</td>
                        <td>{booking.checkOut}</td>
                        <td>
                            {
                                booking.service
                            }
                        </td>
                        <td>${booking.totalPayment}</td>
                        <td>{booking.createAt}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBooking