import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchEvaluateByIdRoom } from '../../redux/features/roomsSlice/roomsSlice'
import { actFetchAllUsers, actFetchUserByID } from '../../redux/features/usersSlice/usersSlice'
import Comment from '../Comment/Comment'
import './Rating.scss'
const Rating = ({param}) => {
    const dispatch = useDispatch()
    const {evaluate} = useSelector((state) => state.rooms)
    const {users, isLogged} = useSelector((state) => state.users)
    const computedEvaluate = (evaluate)=>{
        const  result= []
        for(let cmt of evaluate){
            const existedUser = users.find(user => user.id === cmt.idUser)
            if(existedUser) {
                result.push(existedUser)
            }
        }
         return result 
    }
    
    const userCmt = computedEvaluate(evaluate)

  
    useEffect(() => {
        dispatch(actFetchEvaluateByIdRoom(Number(param.idRoom)))
        dispatch(actFetchAllUsers())
    },[])
  return (
    <div className='rating-container'>
        <div className='top'>
            {
                isLogged && (<Comment param={param}/>)
            }
        </div>
        <div className='bot'>
        {
            evaluate.map((value, index) => {
                return(
                    <div className='rating-customer' key={value.id}>
                        <img src={userCmt[index]?.image} alt="" />
                        <div className='rating-detail'>
                            <span className='rating-name'>{userCmt[index]?.userName}</span>
                            <span className='rating-comment'>{value.content}</span>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Rating