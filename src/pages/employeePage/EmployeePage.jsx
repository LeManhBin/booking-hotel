import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actCreateEmployee, actDeleteEmployee, actFetchAllEmployee } from '../../redux/features/employeeSlice/employeeSlice'
import Pagination from '../../components/Pagination/Pagination'
import { toast } from 'react-toastify'
import UpdatePopup from './UpdatePopup'
import { useNavigate } from 'react-router-dom'


const EmployeePage = () => {
  const [isUpdate, setIsUpdate] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {allEmployee,isLoading} = useSelector((state) => state.employee)
  const [idTemp, setIdTemp] = useState()

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(4)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  const currentItems = allEmployee.slice(firstPageIndex, lastPageIndex);

  const totalPage = allEmployee.length



  useEffect(() => {
    dispatch(actFetchAllEmployee())
  },[])

  const handleAddNewPage = () => {
    navigate('/admin/add-new-employee')
  }

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
            <button onClick={handleAddNewPage}>Add New</button>
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