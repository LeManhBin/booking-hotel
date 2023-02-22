import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChartColumn from '../../components/ChartColumn/ChartColumn'
import ChartPie from '../../components/ChartPie/ChartPie'
import TableDataStatusRoom from '../../components/TableDataStatusRoom/TableDataStatusRoom'
import Widget from '../../components/Widgets/Widget'
import { actFetchAllEmployee } from '../../redux/features/employeeSlice/employeeSlice'
import { actFetchAllRoom } from '../../redux/features/roomsSlice/roomsSlice'
import './DashboardPage.scss'



const DashboardPage = () => {
  const {allEmployee} = useSelector((state) => state.employee)
  const dispatch = useDispatch()
  const [employeeQuantity, setEmployeeQuantity] = useState(0)
  const [roomQuantity, setRoomQuantity] = useState(0)

  const {allRooms} = useSelector((state) => state.rooms)
  const handleSetEmployeeQuantity = () => {
    setEmployeeQuantity(allEmployee.length)
  }
  
  const handleSetRoomQuantity = () => {
    setRoomQuantity(allRooms.length)
  }

  
  useEffect(() => {
    dispatch(actFetchAllEmployee())
    dispatch(actFetchAllRoom())
  },[])

  useEffect(() => {
    handleSetEmployeeQuantity()
    handleSetRoomQuantity()
  })

  return (
    <div className='dashboard'>
        <div className='widgets'>
            <Widget type={"user"} userQuantity={"99"}/>
            <Widget type={"employee"} employeeQuantity={employeeQuantity}/>
            <Widget type={"room"} roomQuantity={roomQuantity}/>
            <Widget type={"revenue"} totalMoney={"199999990"}/>
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
            <TableDataStatusRoom allRooms={allRooms}/>
        </div>
    </div>
  )
}

export default DashboardPage