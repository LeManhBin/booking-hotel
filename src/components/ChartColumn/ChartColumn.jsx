import React, { useEffect, useMemo, useState } from 'react'
import { Column } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllBookings } from '../../redux/features/bookingsSlice/bookingsSlice';

const ChartColumn = () => {
    const dispatch = useDispatch()
    const {allBookings} = useSelector((state) => state.bookings)
    console.log(allBookings ,'allboking');
    const [filter, setFilter] = useState("");

    
    console.log(filter, 'filter');
    useEffect(() => {
      dispatch(actFetchAllBookings())
    },[])

    allBookings.map(data => {
      const haha = new Date(data.createAt).getMonth()

      console.log(haha, 'haha');
    })


    const computedBookingTypeYear = useMemo(() => {
      return allBookings.reduce((prevObj, booking)=>{
        const Month = new Date(booking.createAt).getMonth()

        if(Month + 1 === 1) {
          return {
            ...prevObj,
            Thang1: (prevObj.Thang1 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 2) {
          return {
            ...prevObj,
            Thang2: (prevObj.Thang2 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 3) {
          return {
            ...prevObj,
            Thang3: (prevObj.Thang3 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 4) {
          return {
            ...prevObj,
            Thang4: (prevObj.Thang4 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 5) {
          return {
            ...prevObj,
            Thang5: (prevObj.Thang5 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 6) {
          return {
            ...prevObj,
            Thang6: (prevObj.Thang6 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 7) {
          return {
            ...prevObj,
            Thang7: (prevObj.Thang7 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 8) {
          return {
            ...prevObj,
            Thang8: (prevObj.Thang8 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 9) {
          return {
            ...prevObj,
            Thang9: (prevObj.Thang9 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 10) {
          return {
            ...prevObj,
            Thang10: (prevObj.Thang10 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 11) {
          return {
            ...prevObj,
            Thang11: (prevObj.Thang11 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 12) {
          return {
            ...prevObj,
            Thang12: (prevObj.Thang12 || 0) + booking.totalPayment
          }
        }
      }, {})
    }, [allBookings])

    // const computedBookingTypeToDay = useMemo(() => {
    //   return allBookings.reduce((prevObj, booking) => {
    //     const now = new Date().getDate()+1
    //     console.log(now ,'now');
    //     const date = new Date(booking.createAt).getDate()
    //     console.log(date,'date');
    //     if(date === now) {
    //       return {
    //         ...prevObj,
    //         HomNay: (prevObj.HomNay || 0) + booking.totalPayment
    //       }
    //     }
    //   },{})
    // }, [allBookings])

    
    // const computedBookingTypeMonth = useMemo(() => {
    //   return allBookings.reduce((prevObj, booking) => {
    //     const nowMonth = new Date().getMonth()+1
    //     console.log(nowMonth ,'nowM');
    //     const month = new Date(booking.createAt).getMonth()
    //     console.log(date,'month');
    //     if(month === nowMonth) {
    //       return {
    //         ...prevObj,
    //         ThangNay: (prevObj.ThangNay || 0) + booking.totalPayment
    //       }
    //     }
    //   },{})
    // }, [allBookings])


    const data = [
        {
          type: 'January',
          sales: computedBookingTypeYear.Thang1,
        },
        {
          type: 'February',
          sales: computedBookingTypeYear.Thang2,
        },
        {
          type: 'March',
          sales: computedBookingTypeYear.Thang3,
        },
        {
          type: 'April',
          sales: computedBookingTypeYear.Thang4,
        },
        {
          type: 'May',
          sales: computedBookingTypeYear.Thang5,
        },
        {
          type: 'June',
          sales: computedBookingTypeYear.Thang6,
        },
        {
          type: 'July',
          sales: computedBookingTypeYear.Thang7,
        },
        {
          type: 'August',
          sales: computedBookingTypeYear.Thang8,
        },
        {
          type: 'September',
          sales: computedBookingTypeYear.Thang9,
        },
        {
          type: 'October',
          sales: computedBookingTypeYear.Thang10,
        },
        {
          type: 'November',
          sales: computedBookingTypeYear.Thang11,
        },
        {
          type: 'December',
          sales: computedBookingTypeYear.Thang12,
        },
      ];

      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: 'Revenue',
          },
        },
      };
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <div className='filter-statistical'>
          <select name="" id="" onChange={(e) => setFilter(e.target.value)} style={{outline: 'none', padding: '5px 10px', border: '1px solid #eee', borderRadius: '5px'}}>
            <option value="homnay">Hôm Nay</option>
            <option value="thangnay">Tháng Này</option>
            <option value="namnay">Năm Nay</option>
          </select>
      </div>
      <Column {...config} />
    </div>
  )
}

export default ChartColumn