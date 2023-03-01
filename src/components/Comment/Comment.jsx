import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserBytId } from '../../apis/usersApi'
import { actCreateEvaluate } from '../../redux/features/roomsSlice/roomsSlice'
import { actFetchUserByID } from '../../redux/features/usersSlice/usersSlice'
import './Comment.scss'
const Comment = ({param}) => {

  const {user} = useSelector((state) => state.users)

  const idRoom = Number(param.idRoom)

  const dispatch = useDispatch()
  const initialComment = {
    idUser: user.id,
    idRoom: idRoom,
    content: "",
  }
  const [formCmt, setFormCmt] = useState(initialComment)
  const handleOnChange = (e) => {
    const {name, value} = e.target
    setFormCmt({
      ...formCmt,
      [name]: value
    })
  }
  
  const handleComment = (e) => {
    e.preventDefault()
    dispatch(actCreateEvaluate(formCmt))
  }

  useEffect(() => {
    dispatch(actFetchUserByID(user.id))
  },[])
  return (
    <div className='comment-container'>
      <form onSubmit={handleComment}>
        <input type="text" name='content' value={formCmt.content} onChange={handleOnChange}/>
        <button type='submit'>Comment</button>
      </form>
    </div>
  )
}

export default Comment