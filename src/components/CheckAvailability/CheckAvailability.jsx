import React, { useState } from 'react'
import './CheckAvailability.scss'
const CheckAvailability = ({color, colorH4}) => {
  const [people, setPeople] = useState(1)
  return (
    <div className='availability-container' style={{backgroundColor: `${color}`}}>
        <form className='availability__form'>
            <div className='availability__form--input'>
              <h4 style={{color: `${colorH4}`}}>Arrival Date</h4>
              <input type="date" />
            </div>
            <div className='availability__form--input'>
              <h4 style={{color: `${colorH4}`}}>Departure Date</h4>
              <input type="date" />
            </div>
            <div className='availability__form--input'>
              <h4 style={{color: `${colorH4}`}}>Departure Date</h4>
              <input className='number' type="number" min={1} value={people} placeholder='People' onChange={(e) => setPeople(e.target.value)}/>
            </div>
            <button>Check Availability</button>
        </form>
    </div>
  )
}

export default CheckAvailability