import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { actUpdateRoom } from '../../redux/features/roomsSlice/roomsSlice'

const UpdatePopup = ({setIsUpdate,idTemp}) => {
    const room = useSelector((state) => state.rooms.allRooms.find(room => room.id === idTemp))
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState(room)

    const handleImageDescription = (e,index) => {
        const {value} = e.target;
        const imgs = [...inputs.imageSecondary]
        imgs[index] = value
    
        setInputs(prevFormState => ({
          ...prevFormState,
          imageSecondary: [...imgs]
        }))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if(!inputs.roomName || !inputs.imageMain || !inputs.imageSecondary || !inputs.price || !inputs.description){
            toast.warning('Please enter all fields')
        }else {
            dispatch(actUpdateRoom(inputs.id, inputs))
            toast.success('Update thành công')
            setIsUpdate(false)
        }
        
    }
  return (
    <div className='update'>
        <h3 className='heading'>Update</h3>
        <span className='close-btn' onClick={() => setIsUpdate(false)}><i className="fa-solid fa-rectangle-xmark"></i></span>
        <form onSubmit={handleUpdate}>
            <div className='form-input'>
                <label htmlFor="">Room Name</label>
                <input required type="text" name='roomName' placeholder='Enter new room name' value={inputs.roomName} onChange={handleChange}/>
            </div>
            <div className="form-input">
                <label>Type</label>
                <select name='typeRoom' value={inputs.typeRoom} onChange={handleChange}>
                    <option value="standard">Standard</option>
                    <option value="superior">Superior</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                    <option value="connecting">Connecting</option>
                </select>
            </div>
            <div className="form-input">
                <label>Image 1</label>
                <input required type="text" name='imageMain' placeholder='enter room image' value={inputs.imageMain} onChange={handleChange}/>
            </div>
            <div className="form-input">
                <label>Image 2</label>
                <input required type="text" name='imageSecondary' placeholder='enter room image' value={inputs.imageSecondary[0]} 
                    onChange={(e) => handleImageDescription(e, 0)}/>
            </div>
            <div className="form-input">
                <label>Image 3</label>
                <input required type="text" name='imageSecondary' placeholder='enter room image' value={inputs.imageSecondary[1]} 
                    onChange={(e) => handleImageDescription(e, 1)}/>
            </div>
            <div className="form-input">
                <label>Image 4</label>
                <input required type="text" name='imageSecondary' placeholder='enter room image' value={inputs.imageSecondary[2]} 
                    onChange={(e) => handleImageDescription(e, 2)}/>
            </div>
            <div className="form-input">
                <label>Size</label>
                <input type="number" name='size' min={1} placeholder='enter room size' value={inputs.size} onChange={handleChange}/>
            </div>
            <div className="form-input">
                <label>Price</label>
                <input type="number" name='price' min={0} placeholder='enter room price' value={inputs.price} onChange={handleChange}/>
            </div>
            <div className="form-input">
                <label>Description</label>
                <textarea name='description' 
                required placeholder='enter room description' cols="30" rows="10" value={inputs.description} onChange={handleChange}></textarea>
            </div>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdatePopup