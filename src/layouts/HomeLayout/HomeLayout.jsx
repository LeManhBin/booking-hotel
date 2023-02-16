import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './HomeLayout.scss'
import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
  return (
    <div className='homelayout'>
        <div className='header-layout'>
          <Header/>
        </div>
        <div className='outlet'>
          <Outlet/>
        </div>
        <div className='footer-layout'>
          <Footer/>
        </div>
    </div>
  )
}

export default HomeLayout