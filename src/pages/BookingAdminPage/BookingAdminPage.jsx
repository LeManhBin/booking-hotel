import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actDeleteBooking, actFetchAllBookings } from '../../redux/features/bookingsSlice/bookingsSlice'
import { actFetchAllUsers } from '../../redux/features/usersSlice/usersSlice'

const BookingAdminPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {allBookings} = useSelector((state) => state.bookings)
  const {users} = useSelector((state) => state.users)


  useEffect(() => {
    dispatch(actFetchAllBookings())
    dispatch(actFetchAllUsers())
  },[])

  const handleDelete = (booking) => {
    dispatch(actDeleteBooking(booking.id))
  }

  const handleViewBookingDetail = (booking) => {
    navigate(`/admin/booking/${booking.id}`)
  }

  
  const computedEvaluate = (allBookings)=>{
    const  result= []
    for(let cmt of allBookings){
        const existedUser = users.find(user => user.id === cmt.customerId)
        if(existedUser) {
            result.push(existedUser)
        }
    }
      return result 
  } 
  const userBooking = computedEvaluate(allBookings)

  const handleBookingConfirmPage = () => {
    navigate("/admin/booking-confirm")
  }
  return (
    <div className='manage-container'>
      <div className="top">
          <h3>Quản lý booking</h3>
          <button onClick={handleBookingConfirmPage}>Đã xác nhận</button>
      </div>
      <div className='main'>
            <div className='main__table'>
              <div className='table__container' >
                <table id="customers">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>ID</th>
                      <th>Name User</th>
                      <th>Check In</th>
                      <th>Check Out</th>
                      <th>Status</th>
                      <th>Amount Paid</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      allBookings.filter(data => data.status !== 2).map((booking, index) => {
                        let status = '';
                        if(booking.status === 1) {
                          status = "Chờ xác nhận"
                        }else {
                          status = "Đã xác nhận"
                        }
                        return(
                          <tr key={booking.id}>
                            <td>{index + 1}</td>
                            <td>{booking.id}</td>
                            <td>{userBooking[index]?.userName}</td>
                            <td>{booking.checkIn}</td>
                            <td>{booking.checkOut}</td>
                            <td>{status}</td>
                            <td>${booking.totalPayment}</td>
                            <td>
                                <button className='edit-btn' onClick={() => handleViewBookingDetail(booking)}>View</button>
                                <button className='delete-btn' onClick={() => handleDelete(booking)}>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </div>
  )
}

export default BookingAdminPage