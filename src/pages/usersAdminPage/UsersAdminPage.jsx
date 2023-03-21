import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '../../components/Pagination/Pagination';
import PopUpDelete from '../../components/PopUpDelete/PopUpDelete';
import { actDeleteUser, actFetchAllUsers, actFetchUserByID } from '../../redux/features/usersSlice/usersSlice';
import ViewUser from './ViewUser';

const UsersAdminPage = () => {
  const [isShowPopUp, setIsShowPopUp] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {users} = useSelector((state) => state.users)
  const {user} = useSelector((state) => state.users)
  const [searchTerm, setSearchTerm] = useState("");
  const [idTemp, setIdTemp] = useState()
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(8)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  const currentItems = users.slice(firstPageIndex, lastPageIndex);

  const totalPage = users.length
  useEffect(() => {
    dispatch(actFetchAllUsers())
  },[])

  const handleAddNewPage = () => {
    navigate('/admin/add-new-user')
  } 

  const handleViewUser = (id) => {
      navigate(`/admin/users/${id}`)
  }
  const handleFilterBlog = () => {
    return users?.filter((user) => {
      return user?.userName?.toLowerCase().includes(searchTerm?.toLowerCase());
    }).slice(firstPageIndex, lastPageIndex);
  }

  
  const  handleShowPopUpDelete = (id) => {
    setIsShowPopUp(true)
    setIdTemp(id)
  }

  const handleDelete = (id) => {
    dispatch(actDeleteUser(id))
    toast.success('Delete Success')
  }
  return (
    <div className='manage-container'>
        {
            isShowPopUp && (<PopUpDelete setIsShowPopUp={setIsShowPopUp} handleDelete={handleDelete} idTemp={idTemp} title={"Bạn có chắc với thao tác này ?"}/>)
        }
        <div className="top">
            <h2>Quản lý người dùng</h2>
            <button onClick={handleAddNewPage}>Add New</button>
        </div>
        <div className='search-container'>
            <input type="text" placeholder='Enter title...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
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
                        handleFilterBlog()?.map((user, index) => {
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
                                  <button className='delete-btn' onClick={() => handleShowPopUpDelete(user.id)}>Delete</button>
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
    </div>
  )
}

export default UsersAdminPage