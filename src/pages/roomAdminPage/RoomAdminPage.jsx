import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Pagination from '../../components/Pagination/Pagination'
import PopUpDelete from '../../components/PopUpDelete/PopUpDelete'
import RoomStatus from '../../components/RoomStatus/RoomStatus'
import { actCreateRoom, actDeleteRoom, actFetchAllRoom } from '../../redux/features/roomsSlice/roomsSlice'
import './RoomAdminPage.scss'
import UpdatePopup from './UpdatePopup'


const RoomAdminPage = () => {
  const [isShowPopUp, setIsShowPopUp] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {allRooms} = useSelector((state) => state.rooms)
  const [isUpdate, setIsUpdate] = useState(false)
  const [idTemp, setIdTemp] = useState()
  const [searchTerm, setSearchTerm] = useState("");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  const currentItems = allRooms.slice(firstPageIndex, lastPageIndex);

  const totalPage = allRooms.length

  const handleFilterBlog = () => {
    return allRooms?.filter((room) => {
      return room.roomName?.toLowerCase().includes(searchTerm?.toLowerCase());
    }).slice(firstPageIndex, lastPageIndex);
  }
  
  useEffect(() => {
    dispatch(actFetchAllRoom())
  },[])

  const handleAddNewPage = () => {
    navigate('/admin/add-new-room')
  }

  const  handleShowPopUpDelete = (room) => {
    setIsShowPopUp(true)
    setIdTemp(room)
  }
  const handleDelete = (room) => {
    if(room.status === 2 || room.status === 3) {
      toast.warning("Phòng đã được đặt hoặc đang được sử dụng !!")
    }else {
      dispatch(actDeleteRoom(room.id))
    }
  }

  const handleShowUpdate = (room) => {
    if(room.status === 2 || room.status === 3) {
      toast.warning("Phòng đã được đặt hoặc đang được sử dụng !!")
      setIsUpdate(false)
    }else {
      setIsUpdate(true)
      setIdTemp(room.id)
    }
  }
  return (
    <div className='manage-container'>
        {
            isShowPopUp && (<PopUpDelete setIsShowPopUp={setIsShowPopUp} handleDelete={handleDelete} idTemp={idTemp} title={"Bạn có chắc với thao tác này ?"}/>)
        }
        <div className="top">
            <h2>Quản lý phòng</h2>
            <button onClick={handleAddNewPage}>Add New</button>
        </div>
        <div className='search-container'>
            <input type="text" placeholder='Enter title...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className='main'>
            <div className='main__table'>
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
                      handleFilterBlog().map((room, index) => {
                        let status
                        if(room.status === 1) {
                          status = <RoomStatus text={"Còn Trống"} className={'isEmpty'}/>
                        }else if(room.status === 2) {
                            status = <RoomStatus text={"Đã Được Đặt"} className={'booked'}/>
                        }else if(room.status === 3) {
                            status = <RoomStatus text={"Đang Được Dùng"} className={'isUse'}/>
                        }
                        return(
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
                                    <button className='edit-btn' onClick={() => handleShowUpdate(room)}>Edit</button>
                                    <button className='delete-btn' onClick={() => handleShowPopUpDelete(room)}>Delete</button>
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
            </div>
        </div>
        {
          isUpdate && 
          (
            <div className='update-container'>
              {
                <UpdatePopup setIsUpdate={setIsUpdate} idTemp={idTemp}/>
              }
            </div>
          )
        }
    </div>
  )
}

export default RoomAdminPage