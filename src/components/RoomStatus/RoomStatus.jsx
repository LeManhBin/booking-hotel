import React from 'react'
import './RoomStatus.scss'
const RoomStatus = ({text, className}) => {
  return (
    <div className='status-container'>
        <div className={`${className} status-tag`}>
          {text}
        </div>
    </div>
  )
}

export default RoomStatus