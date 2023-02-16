import React from 'react'
import './CardService.scss'
const CardService = ({service}) => {
  return (
    <div className='card-service'>
        <div className='service__image'>
            <img src={service.img} alt="" />
        </div>
        <div className='service__desc'>
            <h4>{service.title}</h4>
            <div className='service__desc--detail'>
                {service.detail}
            </div>
        </div>
    </div>
  )
}

export default CardService