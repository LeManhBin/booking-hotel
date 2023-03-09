import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Other.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllEvaluate } from '../../redux/features/roomsSlice/roomsSlice';
import { actFetchAllUsers } from '../../redux/features/usersSlice/usersSlice';
import { actFetchAllBlog } from '../../redux/features/blogSlice/blogSlice';
const Other = () => {
    const {allBlog} = useSelector((state) => state.blogs)

    useEffect(() => {
        dispatch(actFetchAllBlog())
    },[])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

      const dispatch = useDispatch()
      const {evaluate} = useSelector((state) => state.rooms)
      const {users} = useSelector((state) => state.users)
      const computedEvaluate = (evaluate)=>{
        const  result= []
        for(let cmt of evaluate){
            const existedUser = users.find(user => user.id === cmt.idUser)
            if(existedUser) {
                result.push(existedUser)
            }
        }
         return result 
    }
    
    const userCmt = computedEvaluate(evaluate)

      useEffect(() => {
        dispatch(actFetchAllEvaluate())
        dispatch(actFetchAllUsers())
      },[])
  return (
    <div className='other-container'>
        <div className='event-container'>
            <h3 className='title'>Upcoming Events</h3>
            {
                allBlog.slice(0,2).map(data => {
                    return(
                        <div className='event' key={data.id}>
                            <div className='event__calendar'>
                                <span>27</span>
                                <span>0ct</span>
                            </div>
                            <div className='event__desc'>
                                <h4 className='event__desc--title'>{data.title}</h4>
                                <div className='event__desc--detail'>
                                   {data.content}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <p className='event-link'><Link to={"/blog"}>Read All Event</Link></p>
        </div>
        <div className='testimonial-container'>
            <h3 className='title'>Testimonials</h3>
            <div className='testimonial'>
                <Slider {...settings}>
                    {
                        evaluate.slice(0,5).map((data, index) => {
                            return(
                                <div key={data.id} className="testimonial-flex">
                                    <div className='testimonial__slide'>
                                        {data.content}
                                    </div>
                                    <div className='testimonial__cus'>
                                        <img src={userCmt[index]?.image} alt="" />
                                        <span className='name'>{userCmt[index]?.userName}</span>
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