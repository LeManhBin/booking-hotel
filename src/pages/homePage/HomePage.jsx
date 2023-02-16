import React from 'react'
import BannerMain from '../../components/BannerMain/BannerMain'
import Card from '../../components/Card/Card'
import CardService from '../../components/CardService/CardService'
import './HomePage.scss'
import { serviceData } from '../../constants/serviceData'
import Other from '../../components/Other/Other'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { cardData } from '../../constants/cardData'

const HomePage = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='homepage'>
      <BannerMain color={"#5a5a5a"} colorH4={"#fff"}/>
      <div className='homepage-container'>
        <div className='heading'>
            <h3 className='heading__primary'>Hotel Master Rooms</h3>
            <p className='heading__secondary'>Semper ac dolor vitae accumsan.</p>
        </div>
        <div className='card'>
            <Slider {...settings}>
              {
                cardData.map(card => {
                  return(
                    <div key={card.id}>
                      <Card card={card}/>
                    </div>
                  )
                })
              }
            </Slider>
        </div>
        <div className='heading'>
            <p className='heading__secondary'>Red Hot Summer</p>
            <h2 className='heading__primary big'>Savings</h2>
            <p className='heading__sale'>50% Off 3rd Night</p>
            <button>Learn More</button>
        </div>
        <div className='heading'>
            <h3 className='heading__primary'>Our Services</h3>
            <p className='heading__secondary'>Sailing Hotel provides all services you need.</p>
        </div>
        <div className='service'>
            {
              serviceData.map(service => {
                return(
                  <div key={service.id}>
                    <CardService service={service}/>
                  </div>
                )
              })
            }
        </div>
        <div className='heading'>
            <h3 className='heading__primary'>Orther</h3>
            <p className='heading__secondary'>Sailing Hotel provides all services you need.</p>
        </div>
        <div className='other'>
            <Other/>
        </div>
      </div>
    </div>
  )
}

export default HomePage