import React from 'react'
import { Link } from 'react-router-dom'
import './Other.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from '../../constants/testimonialData';
const Other = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <div className='other-container'>
        <div className='event-container'>
            <h3 className='title'>Upcoming Events</h3>
            <div className='event'>
                <div className='event__calendar'>
                    <span>27</span>
                    <span>0ct</span>
                </div>
                <div className='event__desc'>
                    <h4 className='event__desc--title'>Host a Family Party</h4>
                    <div className='event__desc--detail'>
                        When you host a party or family reunion, the special celebrations let you strengthen bonds with those you hold...
                    </div>
                </div>
            </div>
            <div className='event'>
                <div className='event__calendar'>
                    <span>10</span>
                    <span>Jan</span>
                </div>
                <div className='event__desc'>
                    <h4 className='event__desc--title'>Other</h4>
                    <div className='event__desc--detail'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste commodi reiciendis fugit qui quia ut, non omnis dignissimos minima...
                    </div>
                </div>
            </div>
            <p className='event-link'><Link to={"/blog"}>Read All Event</Link></p>
        </div>
        <div className='testimonial-container'>
            <h3 className='title'>Testimonials</h3>
            <div className='testimonial'>
                <Slider {...settings}>
                    {
                        testimonialData.map(data => {
                            return(
                                <div key={data.id}>
                                    <div className='testimonial__slide'>
                                        {data.detail}
                                    </div>
                                    <div className='testimonial__cus'>
                                        <img src={data.img} alt="" />
                                        <span className='name'>{data.name}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
        <div className='map-container'>
            <h3 className='title'>Address</h3>
            {/* <iframe src="https://www.facebook.com/bin.lemanh/" frameborder="0"></iframe> */}
        </div>
    </div>
  )
}

export default Other