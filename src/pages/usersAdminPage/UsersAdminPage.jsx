import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { actDeleteUser, actFetchAllUsers, actFetchUserByID } from '../../redux/features/usersSlice/usersSlice';
import ViewUser from './ViewUser';

const UsersAdminPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {users} = useSelector((state) => state.users)
  const {user} = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(actFetchAllUsers())
  },[])

  const handleAddNewPage = () => {
    navigate('/admin/add-new-user')
  } 
  const handleDelete = (id) => {
    dispatch(actDeleteUser(id))
    toast.success('Delete Success')
  }

  const handleViewUser = (id) => {
      navigate(`/admin/users/${id}`)
  }
  return (
    <div className='manage-container'>
        <div className="top">
            <h2>Quản lý người dùng</h2>
            <button onClick={handleAddNewPage}>Add New</button>
        </div>
        <div className='main'>
            <div className='main__table'>
              <div className='table__container' >
                <table id="customers">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Position</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        users?.map((user, index) => {
                          let position
                          if(user.isAdmin === false) {
                            position = 'Customer'
                          }else {
                            position = 'Admin'
                          }
                          return(
                            <tr key={user.id}>
                              <td>{index + 1}</td>  
                              <td>{user.userName}</td>
                              <td>{user.email}</td>
                              <td>{position}</td>
                              <td>
                                  <button className='edit-btn' onClick={() => handleViewUser(user.id)}>View</button>
                                  <button className='delete-btn' onClick={() => handleDelete(user.id)}>Delete</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default UsersAdminPage