import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actFetchSearch } from '../../redux/features/roomsSlice/roomsSlice'
import './CheckAvailability.scss'
const CheckAvailability = ({color, colorH4}) => {
  const dispatch = useDispatch()
  const {roomSearch} = useSelector((state) => state.rooms)
  const navigate = useNavigate()

  const initialSearchValue = {
    checkIn: "",
    checkOut: "",
    guest: 1,
  }
  const [formSearch, setFormSearch] = useState(initialSearchValue)

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setFormSearch({
      ...formSearch,
      [name]: value
    })
  }
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(actFetchSearch(formSearch.guest))
    navigate(`/room/search/${formSearch.guest}`)
  }
  
 

  return (
    <div className='availability-container' style={{backgroundColor: `${color}`}}>
        <form className='availability__form' onSubmit={handleSearch}>
            <div className='availability__form--input'>
              <h4 style={{color: `${colorH4}`}}>Check In</h4>
              <input type="date" name='checkIn' value={formSearch.checkIn} onChange={handleOnChange} />
            </div>
            <div className='availability__form--input'>
              <h4 style={{color: `${colorH4}`}}>Check Out</h4>
              <input type="date" name='checkOut' value={formSearch.checkOut} onChange={handleOnChange} />
            </div>
            <div className='availability__form--input'>
              <h4 style={{color: `${colorH4}`}}>Guest</h4>
              <input className='number' type="number" name='guest' min={1} value={formSearch.guest} placeholder='People' onChange={handleOnChange}/>
            </div>
            <button type='submit'>Check Availability</button>
        </form>
    </div>
  )
}

export default CheckAvailability