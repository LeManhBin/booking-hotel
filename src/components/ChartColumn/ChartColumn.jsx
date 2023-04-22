import React, { useEffect, useMemo, useState } from 'react'
import { Column } from '@ant-design/plots';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllBookings } from '../../redux/features/bookingsSlice/bookingsSlice';
import moment from 'moment';

const ChartColumn = () => {
    const dispatch = useDispatch()
    const {allBookings} = useSelector((state) => state.bookings)
    const [toTalMoney, setToTalMoney] = useState(0)
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [data, setData] = useState([])


    
   
    // const filterRevenueByDate = () => {
    //   const result = {}
    //   allBookings.filter(data => {
    //     const bookingDate = moment(data.createAt);
    //     return bookingDate.isBetween(dateFrom, dateTo, null, []);
    //   }).reduce((total, data) => total + data.totalPayment, 0)
     
    // }
   

    useEffect(() => {
      dispatch(actFetchAllBookings())
    },[])


    const computedBookingTypeYear = useMemo(() => {
      return allBookings.reduce((prevObj, booking)=>{
        const Month = new Date(booking.createAt).getMonth()
        const nowYear = new Date().getFullYear()
        const Year = new Date(booking.createAt).getFullYear()
        if(Month + 1 === 1 && nowYear == Year) {
          return {
            ...prevObj,
            Thang1: (prevObj?.Thang1 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 2 && nowYear === Year) {
          return {
            ...prevObj,
            Thang2: (prevObj?.Thang2 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 3 && nowYear === Year) {
          return {
            ...prevObj,
            Thang3: (prevObj?.Thang3 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 4 && nowYear === Year) {
          return {
            ...prevObj,
            Thang4: (prevObj?.Thang4 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 5 && nowYear === Year) {
          return {
            ...prevObj,
            Thang5: (prevObj?.Thang5 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 6 && nowYear === Year) {
          return {
            ...prevObj,
            Thang6: (prevObj?.Thang6 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 7 && nowYear === Year) {
          return {
            ...prevObj,
            Thang7: (prevObj?.Thang7 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 8 && nowYear === Year) {
          return {
            ...prevObj,
            Thang8: (prevObj?.Thang8 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 9 && nowYear === Year) {
          return {
            ...prevObj,
            Thang9: (prevObj?.Thang9 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 10 && nowYear === Year) {
          return {
            ...prevObj,
            Thang10: (prevObj?.Thang10 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 11 && nowYear === Year) {
          return {
            ...prevObj,
            Thang11: (prevObj?.Thang11 || 0) + booking.totalPayment
          }
        }
        if(Month + 1 === 12 && nowYear === Year) {
          return {
            ...prevObj,
            Thang12: (prevObj?.Thang12 || 0) + booking.totalPayment
          }
        }
      }, {})
    }, [allBookings]) 



    const computedBookingTypeToDay = useMemo(() => {
      return allBookings.reduce((prevObj, booking) => {
        const now = new Date().getDate()
        const date = new Date(booking.createAt).getDate()
        const nowMonth = new Date().getMonth()
        const nowYear = new Date().getFullYear()
        const year = new Date(booking.createAt).getFullYear()
        const month = new Date(booking.createAt).getMonth()
        if(date === now && month === nowMonth && year === nowYear) {
          return {
            ...prevObj,
            homNay: (prevObj?.homNay || 0) + booking.totalPayment
          }
        }
        return prevObj
      },{})
    }, [allBookings])

    const computedBookingTypeMonth = useMemo(() => {
      const nowMonth = new Date().getMonth()
      const nowYear = new Date().getFullYear()
      const dailySales = {}
      allBookings.forEach(sale => {
        const year = new Date(sale.createAt).getFullYear()
        const month = new Date(sale.createAt).getMonth()
        const date = sale.createAt
        
        if(month === nowMonth && year === nowYear) {
          if (dailySales[date]) {
            dailySales[date] += sale.totalPayment;
          } 
          else {
            dailySales[date] = sale.totalPayment;
          }
        }
      });
      return dailySales
    }, [allBookings])

    console.log("Theo năm", computedBookingTypeYear);
    console.log("hôm nay", computedBookingTypeToDay);
    console.log("Theo tháng", computedBookingTypeMonth);
 
      const filterRevenueByDate = () => {
        const result = {}
        allBookings.filter(data => {
          const bookingDate = moment(data.createAt);
          return bookingDate.isBetween(dateFrom, dateTo, null, []);
        }).forEach(sale => {
          const date = sale.createAt
          if (result[date]) {
            result[date] += sale.totalPayment;
          }
          else {
            result[date] = sale.totalPayment;
          }
        })
        const _data = []
        for(let key in result) {
          _data.push({type: key, sales: result[key]})
        }   
       setData(_data)
      }
      // const resultFilter = filterRevenueByDate()
      // console.log(resultFilter, 'ressadas');
     
      // const handleSubmitFilter = (e) => {
      //   e.preventDefault()
        
      // }
     useEffect(() => {
      filterRevenueByDate()
     },[dateTo])
      const handleFilterByDate = (filter) =>{
        let result = []
        switch (filter) {
          case 'homnay':
            result = [{
              type: 'hÔM nAY',
              sales: computedBookingTypeToDay?.homNay
            }]
            
            break;
          case 'thangnay':
            for(let key in computedBookingTypeMonth) {
              result.push({type: key, sales: computedBookingTypeMonth[key]})
            }   
            break;
          case 'namnay':
            result = [
              {
                type: 'January',
                sales: computedBookingTypeYear?.Thang1,
              },
              {
                type: 'February',
                sales: computedBookingTypeYear?.Thang2,
              },
              {
                type: 'March',
                sales: computedBookingTypeYear?.Thang3,
              },
              {
                type: 'April',
                sales: computedBookingTypeYear?.Thang4,
              },
              {
                type: 'May',
                sales: computedBookingTypeYear?.Thang5,
              },
              {
                type: 'June',
                sales: computedBookingTypeYear?.Thang6,
              },
              {
                type: 'July',
                sales: computedBookingTypeYear?.Thang7,
              },
              {
                type: 'August',
                sales: computedBookingTypeYear?.Thang8,
              },
              {
                type: 'September',
                sales: computedBookingTypeYear?.Thang9,
              },
              {
                type: 'October',
                sales: computedBookingTypeYear?.Thang10,
              },
              {
                type: 'November',
                sales: computedBookingTypeYear?.Thang11,
              },
              {
                type: 'December',
                sales: computedBookingTypeYear?.Thang12,
              },
            ];
            break;
          default:
            break;
        }
        setData(result)
      }

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
      <div className='filter-statistical' style={{display: 'flex', alignItems: 'flex-end', gap: '20px'}}>
          <form style={{display: 'flex', alignItems: 'flex-end', gap: '10px'}}>
            <div className='input-form' style={{display:'flex', flexDirection: 'column'}}>
              <label htmlFor="" style={{fontSize: '12px'}}>From</label>
              <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} style={{outline: 'none', padding: '5px 10px', border: 'none', borderRadius: '5px'}}/>
            </div>
            <div className='input-form' style={{display:'flex', flexDirection: 'column'}}>
            <label htmlFor="" style={{fontSize: '12px'}}>To</label>
              <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)}  style={{outline: 'none', padding: '5px 10px', border: 'none', borderRadius: '5px'}}/>
            </div>
            {/* <button  style={{border: 'none', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#fff', borderRadius: '5px'}}>Filter</button> */}
          </form>
          <select name="" id="" onChange={(e) => handleFilterByDate(e.target.value)} style={{outline: 'none', padding: '5px 10px', border: '1px solid #eee', borderRadius: '5px'}}>
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