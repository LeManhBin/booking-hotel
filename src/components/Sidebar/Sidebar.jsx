import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/admin" className='text-style'>
                <span className="logo">Admin</span>
            </Link>       
        </div>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/admin" className='text-style'>
                    <li>
                        <i className="fa-solid fa-chart-simple"></i>
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LIST</p>
                <Link to='/admin/rooms' className='text-style'>
                    <li>
                        <i className="fa-solid fa-hotel"></i>
                        <span>Room</span>
                    </li>
                </Link>

                <Link to='/admin/users' className='text-style'>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to='/admin/employee' className='text-style'>
                    <li>
                        <i className="fa-solid fa-clipboard-user"></i>
                        <span>Employee</span>
                    </li>
                </Link>
                <Link to='/admin/blog' className='text-style'>
                    <li>
                        <i className="fa-brands fa-blogger"></i>
                        <span>Blog</span>
                    </li>
                </Link>
                <Link to='/admin/booking' className='text-style'>
                    <li>
                        <i className="fa-solid fa-bookmark"></i>
                        <span>Booking</span>
                    </li>
                </Link>      
                <Link to='/admin/config' className='text-style'>
                    <li>
                        <i className="fa-solid fa-bookmark"></i>
                        <span>Config</span>
                    </li>
                </Link>   
            </ul>
        </div>
    </div>
  )
}

export default Sidebar