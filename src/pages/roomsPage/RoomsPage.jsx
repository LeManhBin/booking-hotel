import React, { useEffect, useState } from 'react'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import './RoomsPage.scss'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'
import { cardData } from '../../constants/cardData'
import useScrollToTop from '../../hooks/useScrollToTop'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllRoom } from '../../redux/features/roomsSlice/roomsSlice'

const RoomsPage = () => {
  useScrollToTop()
  const {allRooms, isLoading} = useSelector((state) => state.rooms)

  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(8)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;

  const activeCards = allRooms.filter((room) => room.status !== 3);
  const currentItems = activeCards.slice(firstPageIndex, lastPageIndex);

  const totalPage = allRooms.length

  
  useEffect(() => {
    dispatch(actFetchAllRoom())
  },[])

  return (
    <div className='room'>
        <div className='room-banner'>
            <BannerDefine title={"Sailing Hotel"}/>
        </div>
        <div className="room-container">
            {
              currentItems.map(room => {
                return(
                  <div key={room.id}>
                    <Card room={room}/>
                  </div>
                )
              })
            }
        </div>
        <div className='room-pagination'>
            <Pagination
              currentPage={currentPage}
              limit={limit}
              setCurrentPage={setCurrentPage}
              totalPage={totalPage}
            />
        </div>
    </div>
  )
}

export default RoomsPage