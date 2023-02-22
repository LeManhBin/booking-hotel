import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { actUpdateUser } from '../../redux/features/usersSlice/usersSlice'
import './ProfilePage.scss'


const ProfilePage = () => {
  const {user} = useSelector((state) => state.users)
  const dispatch= useDispatch()
  const initialValueForm = {
    userName: user.userName,
    image: user.image,
    address: user.address,
    phoneNumber: user.phoneNumber,
    id: user.id
  }

  const [formState, setFormState] = useState(initialValueForm)
  console.log(user, "user bên profile");

  const handleOnChangeFormData = (e) => {
    const {name, value} = e.target
    setFormState({
      ...formState,
      [name]: value
    })
    console.log(value, name);
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(actUpdateUser(formState.id, formState))
    console.log(formState.id);
    toast.success('Update thành công')
}

  return (
    <div className='profile'>
      <form >
        <div className="profile__top">
          <div className='profile__top--img'>
              <img src={user.image} alt="" />
          </div>
          <div className='profile__top--action'>
              <input type="text" name='image' placeholder='Image' value={formState.image} onChange={handleOnChangeFormData}/>
          </div>
        </div>
        <div className='profile__bottom'>

            <div className='form-input'>
                <label>Name</label>
                <input type="text" name='userName' value={formState.userName} onChange={handleOnChangeFormData}/>
            </div>
            <div className='form-input'>
                <label>Phone Number</label>
                <input type="text" name='phoneNumber' placeholder='Enter your phone number' value={formState.phoneNumber} onChange={handleOnChangeFormData}/>
            </div>
            <div className='form-input'>
                <label>Address</label>
                <input type="text" name='address' placeholder='Enter your address' value={formState.address} onChange={handleOnChangeFormData}/>
            </div>
            <button onClick={(e) => handleUpdate(e)}>Save Profile</button>
         
        </div>
      </form>
    </div>
  )
}

export default ProfilePage