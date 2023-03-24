import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

    const styleActive = ({isActive}) => {
        return {
            backgroundColor: isActive ? '#E9F8F9' : '#fff'
        }
    }
  return (
    <div className='sidebar'>
        <div className="top">
            <NavLink to="/admin" className='text-style'>
                <span className="logo">Admin</span>
            </NavLink>       
        </div>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <NavLink to="/admin" style={styleActive} className='text-style'>
                    <li>
                        <i className="fa-solid fa-chart-simple"></i>
                        <span>Dashboard</span>
                    </li>
                </NavLink>
                <p className="title">LIST</p>
                <NavLink to='/admin/rooms' style={styleActive} className='text-style'>
                    <li>
                        <i className="fa-solid fa-hotel"></i>
                        <span>Room</span>
                    </li>
                </NavLink>

                <NavLink to='/admin/users' style={styleActive} className='text-style'>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <span>Users</span>
                    </li>
                </NavLink>
                <NavLink to='/admin/employee' style={styleActive} className='text-style'>
                    <li>
                        <i className="fa-solid fa-clipboard-user"></i>
                        <span>Employee</span>
                    </li>
                </NavLink>
                <NavLink to='/admin/blog' style={styleActive} className='text-style'>
                    <li>
                        <i className="fa-brands fa-blogger"></i>
                        <span>Blog</span>
                    </li>
                </NavLink>
                <NavLink to='/admin/booking' style={styleActive} className='text-style'>
                    <li>
                        <i className="fa-solid fa-bookmark"></i>
                        <span>Booking</span>
                    </li>
                </NavLink>      
                <NavLink to='/admin/config' style={styleActive} className='text-style'>
                    <li>
                        <i className="fa-solid fa-bookmark"></i>
                        <span>Config</span>
                    </li>
                </NavLink>   
            </ul>
        </div>
    </div>
  )
}

export default Sidebar