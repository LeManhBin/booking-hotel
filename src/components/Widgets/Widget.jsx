import React from 'react'
import './Widget.scss'
import { Link } from 'react-router-dom';
const Widget = ({type, userQuantity, roomQuantity, employeeQuantity, totalMoney}) => {
    let data;
switch(type){
    case "user":
        data={
            title: "User",
            isMoney: false,
            link: "See all users",
            to: "admin/users",
            amount: userQuantity,
            icon: <i className="fa-solid fa-circle-user" style={{color: '#FF7B54', backgroundColor: '#FFB26B' }}></i>
        };
        break;
    case "employee":
        data={
            title: "Employee",
            isMoney: false,
            link: "See all employee",
            to: "admin/employee",
            amount: employeeQuantity,
            icon: <i className="fa-solid fa-address-card" style={{color: '#47B5FF', backgroundColor: '#DFF6FF' }}></i>
        };
    break;
    case "room":
        data={
            title: "Rooms",
            isMoney: false,
            link: "View all room",
            to: "admin/rooms",
            amount: roomQuantity,
            icon: <i className="fa-solid fa-hotel" style={{color: '#439A97', backgroundColor: '#62B6B7' }}></i>
        };
        break;
    case "revenue":
        data={
            title: "Revenue",
            isMoney: true,
            amount: totalMoney,
            icon: <i className="fa-solid fa-sack-dollar" style={{color: '#379237', backgroundColor: '#54B435' }}></i>
        };
        break;
    default:
        break;
}
  return (
    <div className='widget'>
        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.isMoney && "$"} {data.amount}</div> 
          <div className="link"><Link style={{textDecoration: 'none'}} to={`/${data.to}`}>{data.link}</Link></div>
        </div>
        <div className="right">
            {data.icon}
        </div>
    </div>
  )
}

export default React.memo(Widget)