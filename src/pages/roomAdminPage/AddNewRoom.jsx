import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actCreateRoom } from '../../redux/features/roomsSlice/roomsSlice'
import { toast } from 'react-toastify'
import './AddNewRoom.scss'
import { useNavigate } from 'react-router-dom'
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
const AddNewRoom = () => {
    const dispatch = useDispatch()
    const [formState, setFormState] = useState(initialFormState)
    const navigate = useNavigate()
    
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
        navigate('/admin/rooms')
        toast.success('Thêm thành công')
      }

      const handleBack = () => {
        navigate('/admin/rooms')
      }
  return (
    <div className='addnew-container'>
        <div className='top'>
            <h3>Add new room</h3>
            <button onClick={handleBack}>Back</button>
        </div>
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
    </div>
  )
}

export default AddNewRoom