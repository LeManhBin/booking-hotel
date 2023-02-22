import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actCreateEmployee, actDeleteEmployee, actFetchAllEmployee } from '../../redux/features/employeeSlice/employeeSlice'
import Pagination from '../../components/Pagination/Pagination'
import { toast } from 'react-toastify'
import UpdatePopup from './UpdatePopup'

const initialEmployeeState = {
  employeeName: "",
  position: "receptionist",
  employeeImage: "",
  dateOfBirth: "",
}
const EmployeePage = () => {
  const [isUpdate, setIsUpdate] = useState(false)

  const dispatch = useDispatch()
  const {allEmployee,isLoading} = useSelector((state) => state.employee)
  const [formState, setFormState] = useState(initialEmployeeState)
  const [idTemp, setIdTemp] = useState()

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  const currentItems = allEmployee.slice(firstPageIndex, lastPageIndex);

  const totalPage = allEmployee.length

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
    dispatch(actFetchAllEmployee())
    setFormState(initialEmployeeState)
    toast.success('Add data successfully!')
  }

  useEffect(() => {
    dispatch(actFetchAllEmployee())
  },[])

  const handleDelete = (id) => {
    dispatch(actDeleteEmployee(id))
    dispatch(actFetchAllEmployee())
    toast.success('Delete data successfully!')
  }

  const handleShowUpdate = (employee) => {
    console.log(employee);
    setIsUpdate(true)
    setIdTemp(employee.id)
  }

  return (
    <div className='manage-container'>
        <div className="top">
            <h2>Quản lý nhân viên</h2>
        </div>
        <div className='main'>
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
            <div className='main__table'>
              <div className='table__container' >
                <table id="customers">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Image</th>
                      <th>Date Of Birth</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      currentItems.map((employee, index) => {
                        return(
                          <tr key={employee.id}>
                            <td>{index + 1}</td>
                            <td>{employee.id}</td>
                            <td>{employee.employeeName}</td>
                            <td>{employee.position}</td>
                            <td className='img'>
                                <img src={ employee.employeeImage} alt="" />
                            </td>
                            <td>{employee.dateOfBirth}</td>
                            <td>
                                <button className='edit-btn' onClick={() => handleShowUpdate(employee)}>Edit</button>
                                <button className='delete-btn' onClick={() => handleDelete(employee.id)}>Delete</button>
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

export default EmployeePage