import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.scss'
const Card = ({card}) => {
    const navigate = useNavigate()

    const handleSeeDetail = (id) => {
        navigate(`/rooms/${id}`)
    }

  return (
    <div className='card-container' onClick={() => handleSeeDetail(card.id)}>
        <div className='card__image'>
            <img src={card.img} alt="" />
            <div className='card__image--overlay'>
                <button className='overlay-btn' onClick={()=> handleSeeDetail(card.id)}>MORE INFO</button>
            </div>
        </div>
        <div className='card__desc'>
            <h4>{card.name}</h4>
            <p className='card__desc--kind'>{card.kind}</p>

            <div className='card__desc--detail'>
                <p>{card.detail}</p>
            </div>
        </div>
        <div className='card__service'>
            <i className="fa-solid fa-mug-saucer"></i>
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-utensils"></i>
            <i className="fa-solid fa-plane"></i>
        </div>
        <div className='card__price'>
            <p><span>Price: </span><b>${card.price}</b>/night</p>
        </div>
    </div>
  )
}

export default Card