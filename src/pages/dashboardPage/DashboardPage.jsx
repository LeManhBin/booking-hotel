import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChartColumn from '../../components/ChartColumn/ChartColumn'
import ChartPie from '../../components/ChartPie/ChartPie'
import TableDataStatusRoom from '../../components/TableDataStatusRoom/TableDataStatusRoom'
import Widget from '../../components/Widgets/Widget'
import { actFetchAllBookings } from '../../redux/features/bookingsSlice/bookingsSlice'
import { actFetchAllEmployee } from '../../redux/features/employeeSlice/employeeSlice'
import { actFetchAllRoom } from '../../redux/features/roomsSlice/roomsSlice'
import { actFetchAllUsers } from '../../redux/features/usersSlice/usersSlice'
import './DashboardPage.scss'



const DashboardPage = () => {
  const {allEmployee} = useSelector((state) => state.employee)
  const dispatch = useDispatch()
  const [employeeQuantity, setEmployeeQuantity] = useState(0)
  const [roomQuantity, setRoomQuantity] = useState(0)
  const [userQuantity, setUserQuantity] = useState(0)
  const [totalMoney, setTotalMoney] = useState(0)
  const {users} = useSelector((state) => state.users)
  const {allRooms} = useSelector((state) => state.rooms)
  const {allBookings} = useSelector((state) => state.bookings)

  

  const handleTotalMoney = () => {
    let total = 0
    const data = allBookings.filter(data => data.status !== 1)
    for(let i = 0; i < data.length; i++) {
      total += data[i].totalPayment
    }
    setTotalMoney(total)
  }

  

  const handleSetQuantity = () => {
    setRoomQuantity(allRooms.length)
    setUserQuantity(users.length)
    setEmployeeQuantity(allEmployee.length)
  }

  
  useEffect(() => {
    dispatch(actFetchAllEmployee())
    dispatch(actFetchAllRoom())
    dispatch(actFetchAllUsers())
    dispatch(actFetchAllBookings())
  },[])

  useEffect(() => {
    handleSetQuantity()
    handleTotalMoney()
  })

  return (
    <div className='dashboard'>
        <div className='widgets'>
            <Widget type={"user"} userQuantity={userQuantity}/>
            <Widget type={"employee"} employeeQuantity={employeeQuantity}/>
            <Widget type={"room"} roomQuantity={roomQuantity}/>
            <Widget type={"revenue"} totalMoney={totalMoney}/>
        </div>
        <div className='chart'>
            <div className='chart__pie'>
                <ChartPie/>
            </div>
            <div className='chart__column'>
                <ChartColumn/>
            </div>
        </div>
        <div className='table'>
            <TableDataStatusRoom allRooms={allRooms} allBookings={allBookings}/>
        </div>
    </div>
  )
}

export default DashboardPage