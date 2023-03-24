import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchDataRoomById } from '../../apis/roomsApi'
import { actUpdateBooking } from '../../redux/features/bookingsSlice/bookingsSlice'
import { actFetchRoomById, actFetchAllRoom, actUpdateRoom } from '../../redux/features/roomsSlice/roomsSlice'
import Pagination from '../Pagination/Pagination'
import RoomStatus from '../RoomStatus/RoomStatus'
import './TableDataStatusRoom.scss'
const TableDataStatusRoom = ({ allBookings}) => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4)
    const lastPageIndex = currentPage * limit;
    const firstPageIndex = lastPageIndex - limit;
    const currentItems = allBookings.filter(item => item.status === 1).slice(firstPageIndex, lastPageIndex);
    const totalPage = allBookings.filter(item => item.status == 2).length
    const {room} = useSelector((state) => state.rooms)

    // const { room } = useSelector((state) => {
    //     return state.rooms && state.rooms.room ? state.rooms : { room: {} };
    //   });

    const handleConfirm = (data) => {
        fetchUpdateRoomStatus(data?.roomId)
        const newRoom = {
            ...room,
            // status: 3
        }
        const newBooking = {
            ...data,
            status: 2
        }
        dispatch(actUpdateBooking(data.id, newBooking))
    }

    const fetchUpdateRoomStatus =  (id) => {
         dispatch(actFetchRoomById(id))
    }

    useEffect(() => {
        if (room.id) {
          const newRoom = {
            ...room,
            status: 3
          };
          dispatch(actUpdateRoom(room?.id, newRoom))
        console.log(room.id, newRoom, '---------');
        }
      }, [room]);
    

  return (
    <div className='table__container' >
        <table id="customers">
        <thead>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Room</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                currentItems.map((data, index) => {
                let status
                if(data.status === 1) {
                   status = <RoomStatus text={"Chờ xác nhận"} className={'booked'}/>
                }
                    return (
                        <tr key={data.id}>
                            <td>{index + 1}</td>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.roomId}</td>
                            <td>${data.totalPayment}</td>
                            <td>{status}</td>
                            <td>
                                <button className='edit-btn' onClick={() => handleConfirm(data)} >Xác Nhận</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
        <div className='pagination'>
            <Pagination
            currentPage={currentPage}
            limit={limit}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            background={'#AEE2FF'}
        />
        </div>
    </div>
  )
}

export default TableDataStatusRoom