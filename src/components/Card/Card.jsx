import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.scss'
const Card = ({room}) => {
    const navigate = useNavigate()

    const handleSeeDetail = (id) => {
        navigate(`/rooms/${id}`)
    }

  return (
    <div className='card-container' onClick={() => handleSeeDetail(room.id)}>
        <div className='card__image'>
            <img src={room.imageMain} alt="" />
            <div className='card__image--overlay'>
                <button className='overlay-btn' onClick={()=> handleSeeDetail(room.id)}>MORE INFO</button>
            </div>
        </div>
        <div className='card__desc'>
            <h4>{room.roomName}</h4>
            <p className='card__desc--kind'>{room.typeRoom}</p>
            <p className='card__desc--kind'>Size: {room.size}</p>

            <div className='card__desc--detail'>
                <p>{room.description}</p>
            </div>
        </div>
        <div className='card__service'>
            <i className="fa-solid fa-mug-saucer"></i>
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-utensils"></i>
            <i className="fa-solid fa-plane"></i>
        </div>
        <div className='card__price'>
            <p><span>Price: </span><b>${room.price}</b>/night</p>
        </div>
    </div>
  )
}

export default React.memo(Card)