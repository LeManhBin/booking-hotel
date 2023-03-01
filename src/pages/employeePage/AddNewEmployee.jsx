import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { actCreateEmployee } from '../../redux/features/employeeSlice/employeeSlice'


const initialEmployeeState = {
    employeeName: "",
    position: "receptionist",
    employeeImage: "",
    dateOfBirth: "",
  }
const AddNewEmployee = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formState, setFormState] = useState(initialEmployeeState)


    const handleOnChangeFormData = (e) => {
        const {name, value} = e.target
        setFormState({
          ...formState,
          [name]: value
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actCreateEmployee(formState))
        setFormState(initialEmployeeState)
        navigate('/admin/employee')
        toast.success('Add data successfully!')
      }

      const handleBack = () => {
        navigate('/admin/employee')
      }
  return (
    <div className='addnew-container'>
        <div className='top'>
            <h3>Add new employee</h3>
            <button onClick={handleBack}>Back</button>
        </div>
        <div className='main__form'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-input">
                    <label>Employee Name</label>
                    <input required type="text" name='employeeName' value={formState.employeeName} onChange={handleOnChangeFormData} placeholder='enter employee name'/>
                </div>
                <div className="form-input">
                    <label>Position</label>
                    <select name='position' value={formState.position} onChange={handleOnChangeFormData}>
                    <option value="receptionist">Receptionist</option>
                    <option value="staff">Staff</option>
                    <option value="guard">Guard</option>
                    <option value="technical ">Technical</option>
                    <option value="manager">manager</option>
                    </select>
                </div>
                <div className="form-input">
                    <label>Employee Image</label>
                    <input required type="text" name='employeeImage' value={formState.employeeImage} onChange={handleOnChangeFormData} placeholder='enter employee image'/>
                </div>
                <div className="form-input">
                    <label>Date Of Birth</label>
                    <input required name='dateOfBirth' value={formState.dateOfBirth} onChange={handleOnChangeFormData} type="text"placeholder='enter date of birth'/>
                </div>
                <div className='form-btn'>
                <button required type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddNewEmployee