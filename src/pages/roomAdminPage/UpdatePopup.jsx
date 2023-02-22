import React from 'react'

const UpdatePopup = ({setIsUpdate}) => {
  return (
    <div className='update'>
        <h3 className='heading'>Update</h3>
        <span className='close-btn' onClick={() => setIsUpdate(false)}><i className="fa-solid fa-rectangle-xmark"></i></span>
        <form action="">
            <div className='form-input'>
                <label htmlFor="">Room Name</label>
                <input required type="text"  placeholder='Enter new room name' />
            </div>
            <div className="form-input">
                <label>Type</label>
                <select name='typeRoom'>
                    <option value="standard">Standard</option>
                    <option value="superior">Superior</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                    <option value="connecting">Connecting</option>
                </select>
            </div>
            <div className="form-input">
                <label>Image 1</label>
                <input required type="text" name='imageMain' placeholder='enter room image'/>
            </div>
            <div className="form-input">
                <label>Image 2</label>
                <input required type="text" name='imageSecondary' placeholder='enter room image'/>
            </div>
            <div className="form-input">
                <label>Image 3</label>
                <input required type="text" name='imageSecondary' placeholder='enter room image'/>
            </div>
            <div className="form-input">
                <label>Image 4</label>
                <input required type="text" name='imageSecondary' placeholder='enter room image'/>
            </div>
            <div className="form-input">
                <label>Size</label>
                <input type="number" name='size' min={1} placeholder='enter room size'/>
            </div>
            <div className="form-input">
                <label>Price</label>
                <input type="number" name='price' min={0} placeholder='enter room price'/>
            </div>
            <div className="form-input">
                <label>Description</label>
                <textarea name='description' 
                required placeholder='enter room description' cols="30" rows="10"></textarea>
            </div>
            <button >Update</button>
        </form>
    </div>
  )
}

export default UpdatePopup