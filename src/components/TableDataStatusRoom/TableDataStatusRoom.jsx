import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchRoomById, actFetchAllRoom, actUpdateRoom } from '../../redux/features/roomsSlice/roomsSlice'
import Pagination from '../Pagination/Pagination'
import RoomStatus from '../RoomStatus/RoomStatus'
import './TableDataStatusRoom.scss'
const TableDataStatusRoom = ({allRooms}) => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(4)
    const lastPageIndex = currentPage * limit;
    const firstPageIndex = lastPageIndex - limit;
    const currentItems = allRooms.filter(item => item.status == 2).slice(firstPageIndex, lastPageIndex);
    const totalPage = allRooms.filter(item => item.status == 2).length




    const handleConfirm = (room) => {
        const newRoom = {
            ...room,
            status: 3
        }
        dispatch(actUpdateRoom(room.id, newRoom))
    }
    
    

    useEffect(() => {
        dispatch(actFetchAllRoom())
    },[])



  return (
    <div className='table__container' >
        <table id="customers">
        <thead>
            <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Type</th>
                <th>Size</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                currentItems.map((room, index) => {
                let status
                if(room.status === 1) {
                   status = <RoomStatus text={"Còn Trống"} className={'isEmpty'}/>
                }else if(room.status === 2) {
                    status = <RoomStatus text={"Chờ Xác Nhận"} className={'booked'}/>
                }else if(room.status === 3) {
                    status = <RoomStatus text={"Đang Được Dùng"} className={'isUse'}/>
                }
                    return (
                        <tr key={room.id}>
                            <td>{index + 1}</td>
                            <td>{room.id}</td>
                            <td>{room.roomName}</td>
                            <td className='img'>
                                <img src={room.imageMain} alt="" />
                            </td>
                            <td>{room.typeRoom}</td>
                            <td>{room.size}</td>
                            <td>${room.price}</td>
                            <td>{status}</td>
                            <td>
                                <button className='edit-btn' onClick={() => handleConfirm(room)} >Xác Nhận</button>
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