import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actFetchAllUsers } from '../../redux/features/usersSlice/usersSlice';

const UsersAdminPage = () => {
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(actFetchAllUsers())
  },[])
  return (
    <div className='manage-container'>
        <div className="top">
            <h2>Quản lý người dùng</h2>
        </div>
        <div className='main'>
            {/* <div className='main__form'>
                <form>
                  <div className="form-input">
                      <label>Employee Name</label>
                      <input type="text"  placeholder='enter employee name'/>
                  </div>
                  <div className="form-input">
                      <label>Position</label>
                      <select >
                        <option value="receptionist">Receptionist</option>
                        <option value="staff">Staff</option>
                        <option value="guard">Guard</option>
                        <option value="technical ">Technical</option>
                        <option value="manager">manager</option>
                      </select>
                  </div>
                  <div className="form-input">
                      <label>Employee Image</label>
                      <input type="text"  placeholder='enter employee image'/>
                  </div>
                  <div className="form-input">
                      <label>Date Of Birth</label>
                      <input type="text"placeholder='enter date of birth'/>
                  </div>
                  <div className='form-btn'>
                    <button>Submit</button>
                  </div>
                </form>
            </div> */}
            <div className='main__table'>
              <div className='table__container' >
                <table id="customers">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Address</th>
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
                              <td>{user.id}</td>
                              <td>{user.userName}</td>
                              <td className='img'>
                                <img src={user.image} alt="" />
                              </td>
                              <td>{user.email}</td>
                              <td>{user.phoneNumber}</td>
                              <td>{user.address}</td>
                              <td>{position}</td>
                              <td>
                                  <button className='delete-btn'>Delete</button>
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