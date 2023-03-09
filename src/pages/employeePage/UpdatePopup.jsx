import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { actFetchAllEmployee, actUpdateEmployee } from '../../redux/features/employeeSlice/employeeSlice'

import './Popup.scss'
const UpdatePopup = ({setIsUpdate, idTemp}) => {
    const employee = useSelector((state) => state.employee.allEmployee.find(employee => employee.id === idTemp))

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState(employee)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(actUpdateEmployee(inputs.id, inputs))
        dispatch(actFetchAllEmployee())
        toast.success('Update thành công')
        setIsUpdate(false)
    }
    
  return (
    <div className='update'>
        <h3 className='heading'>Update</h3>
        <span className='close-btn' onClick={() => setIsUpdate(false)}><i className="fa-solid fa-rectangle-xmark"></i></span>
        <form action="">
            <div className='form-input'>
                <label htmlFor="">Employee Name</label>
                <input required type="text" name='employeeName' value={inputs.employeeName} onChange={handleChange} placeholder='Enter new employee name' />
            </div>
            <div className="form-input">
                <label>Position</label>
                <select name='position' value={inputs.position} onChange={handleChange}>
                    <option value="receptionist">Receptionist</option>
                    <option value="staff">Staff</option>
                    <option value="guard">Guard</option>
                    <option value="technical ">Technical</option>
                    <option value="manager">manager</option>
                </select>
            </div>
            <div className='form-input'>
                <label htmlFor="">Employee Image</label>
                <input required type="text"  name='employeeImage' value={inputs.employeeImage} onChange={handleChange} placeholder='Enter new employee image' />
                <img src={inputs.employeeImage} alt="" />
            </div>
            <div className='form-input'>
                <label htmlFor="">Date Of Birth</label>
                <input required type="text" name='dateOfBirth' value={inputs.dateOfBirth} onChange={handleChange} placeholder='Enter new employee date of birth' />
            </div>
            <button onClick={(e) => handleUpdate(e)}>Update</button>
        </form>
    </div>
  )
}

export default UpdatePopup