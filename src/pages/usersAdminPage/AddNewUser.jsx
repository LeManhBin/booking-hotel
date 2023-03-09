import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { actRegister } from '../../redux/features/usersSlice/usersSlice'

const initialFormValue = {
    userName: "",
    email: "",
    password: "",
    isAdmin: false,
    image: "",
    address:"",
    phoneNumber:"",
  }
const AddNewUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formState, setFormState] = useState(initialFormValue)


    const handleChangePosition = (e) => {
        const {value} = e.target;
        const position = Boolean(value)
        setFormState(prevFormState => ({
          ...prevFormState,
          isAdmin: position
        }))
    }
    const handleOnChangeFormData = (e) => {
        const {name, value} = e.target
        setFormState({
          ...formState,
          [name]: value
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(!formState.userName || !formState.email || !formState.password || !formState.image || !formState.address || !formState.phoneNumber) {
          toast.warning('Please enter all fields')
        }else {
          setFormState(initialFormValue)
          dispatch(actRegister(formState))
          navigate('/admin/users')
          toast.success('Add data successfully!')
        }
     
      }

      const handleBack = () => {
        navigate('/admin/users')
      }

  return (
    <div className='addnew-container'>
        <div className='top'>
            <h3>Add new user</h3>
            <button onClick={handleBack}>Back</button>
        </div>
        <div className='main__form'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-input">
                    <label>Employee Name</label>
                    <input required type="text" name='userName' value={formState.userName} onChange={handleOnChangeFormData} placeholder='enter employee name'/>
                </div>
                <div className="form-input">
                    <label>Email</label>
                    <input required type="email" name='email' value={formState.email} onChange={handleOnChangeFormData} placeholder='enter employee name'/>
                </div>
                <div className="form-input">
                    <label>Password</label>
                    <input required type="password" name='password' value={formState.password} onChange={handleOnChangeFormData} placeholder='enter employee name'/>
                </div>
                <div className="form-input">
                    <label>Position</label>
                    <select name='isAdmin'  onChange={handleChangePosition}>
                      <option value="">Client</option>
                      <option value="true">Admin</option>
                    </select>
                </div>
                <div className="form-input">
                    <label>Image</label>
                    <input required type="text" name='image' value={formState.image} onChange={handleOnChangeFormData} placeholder='enter employee image'/>
                </div>
                <div className="form-input">
                    <label>Phone Number</label>
                    <input required name='phoneNumber' value={formState.phoneNumber} onChange={handleOnChangeFormData} type="text"placeholder='enter date of birth'/>
                </div>
                <div className="form-input">
                    <label>Address</label>
                    <input required name='address' value={formState.address} onChange={handleOnChangeFormData} type="text"placeholder='enter date of birth'/>
                </div>
                <div className='form-btn'>
                <button required type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddNewUser