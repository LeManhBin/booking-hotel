import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actFetchUserByID } from '../../redux/features/usersSlice/usersSlice';
import './ViewUser.scss'
const ViewUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const param = useParams()
    const {user} = useSelector((state) => state.users)
    console.log(user,'selector');
    console.log(param);
    useEffect(() => {
      dispatch(actFetchUserByID(Number(param.idUser))) 
    },[])


    const handleBack = () => {
      navigate('/admin/users')
    }
  return (
    <div className='view-container'>
        <div className='heading'>
              <h3>Information</h3>
              <button onClick={handleBack}>Back</button>
        </div>
        <div>
        <div className='main__table'>
              <div className='table__container' >
                <table id="customers">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.userName}</td>
                        <td className='img'>
                            <img src={user.image} alt="" />
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.address}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ViewUser