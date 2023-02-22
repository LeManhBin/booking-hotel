import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Pagination from '../../components/Pagination/Pagination'
import RoomStatus from '../../components/RoomStatus/RoomStatus'
import { actCreateRoom, actDeleteRoom, actFetchAllRoom } from '../../redux/features/roomsSlice/roomsSlice'
import './RoomAdminPage.scss'
import UpdatePopup from './UpdatePopup'

const initialFormState = {
    roomName: "",
    typeRoom: "standard",
    imageMain: "",
    imageSecondary: [],
    status: 1,
    size: 1,
    price: 0,
    description: "",

}
const RoomAdminPage = () => {
  const dispatch = useDispatch()
  const [formState, setFormState] = useState(initialFormState)
  const {allRooms} = useSelector((state) => state.rooms)
  const [isUpdate, setIsUpdate] = useState(false)
  const [idTemp, setIdTemp] = useState()
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  const currentItems = allRooms.slice(firstPageIndex, lastPageIndex);

  const totalPage = allRooms.length
  console.log(allRooms);
  
  useEffect(() => {
    dispatch(actFetchAllRoom())
  },[])

  useEffect(()=>{
    console.log(allRooms,'asdasdasd');
  }, [allRooms])

  const handleImageDescription = (e,index) => {
    const {value} = e.target;
    const imgs = [...formState.imageSecondary]
    imgs[index] = value

    setFormState(prevFormState => ({
      ...prevFormState,
      imageSecondary: [...imgs]
    }))
  }

  const handleChangeInputForm = (e) => {
    const {name, value} = e.target;
    
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actCreateRoom(formState))
    toast.success('Thêm thành công')
  }

  const handleDelete = (room) => {
    if(room.status === 2 || room.status === 3) {
      toast.warning("Phòng đã được đặt hoặc đang được sử dụng !!")
    }else {
      dispatch(actDeleteRoom(room.id))
      toast.success('Delete data successfully!')
    }
  }

  const handleShowUpdate = (room) => {
    console.log(room);
    setIsUpdate(true)
    setIdTemp(room.id)

  }
  return (
    <div className='manage-container'>
        <div className="top">
            <h2>Quản lý phòng</h2>
        </div>
        <div className='main'>
            <div className='main__form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-input">
                      <label>Room Name</label>
                      <input type="text" name='roomName' value={formState.roomName} onChange={handleChangeInputForm} placeholder='enter room name'/>
                  </div>
                  <div className="form-input">
                      <label>Type</label>
                      <select name='typeRoom' value={formState.typeRoom} onChange={handleChangeInputForm} >
                        <option value="standard">Standard</option>
                        <option value="superior">Superior</option>
                        <option value="deluxe">Deluxe</option>
                        <option value="suite">Suite</option>
                        <option value="connecting">Connecting</option>
                      </select>
                  </div>
                  <div className="form-input">
                      <label>Image 1</label>
                      <input type="text" name='imageMain' value={formState.imageMain} onChange={handleChangeInputForm} placeholder='enter room image'/>
                  </div>
                  <div className="form-input">
                      <label>Image 2</label>
                      <input type="text" name='imageSecondary' 
                        value={formState.imageSecondary[0]} 
                        onChange={(e) => handleImageDescription(e, 0)} placeholder='enter room image'/>
                  </div>
                  <div className="form-input">
                      <label>Image 3</label>
                      <input type="text" name='imageSecondary' 
                        value={formState.imageSecondary[1]} 
                        onChange={(e) => handleImageDescription(e, 1)} placeholder='enter room image'/>
                  </div>
                  <div className="form-input">
                      <label>Image 4</label>
                      <input type="text" name='imageSecondary' 
                        value={formState.imageSecondary[2]} 
                        onChange={(e)=> handleImageDescription(e,2)} placeholder='enter room image'/>
                  </div>
                  <div className="form-input">
                      <label>Size</label>
                      <input type="number" name='size' min={1} 
                        value={formState.size} 
                        onChange={handleChangeInputForm} placeholder='enter room size'/>
                  </div>
                  <div className="form-input">
                      <label>Price</label>
                      <input type="number" name='price' min={0} 
                        value={formState.price} 
                        onChange={handleChangeInputForm} placeholder='enter room price'/>
                  </div>
                  <div className="form-input">
                      <label>Description</label>
                      <textarea name='description' 
                        value={formState.description} onChange={handleChangeInputForm} placeholder='enter room description' cols="30" rows="10"></textarea>
                  </div>
                  <div className='form-btn'>
                    <button type='submit'>Submit</button>
                  </div>
                </form>
            </div>
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
                      currentItems.map((room, index) => {
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
                                    <button className='delete-btn' onClick={() => handleDelete(room)}>Delete</button>
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