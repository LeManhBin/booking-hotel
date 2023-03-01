import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import Card from '../../components/Card/Card'
import Default from '../../components/Default/Default'
import Pagination from '../../components/Pagination/Pagination'
import { actFetchSearch } from '../../redux/features/roomsSlice/roomsSlice'

const SearchPage = () => {
    const param = useParams()
    const dispatch = useDispatch()
    const {roomSearch} = useSelector((state) => state.rooms)
    
    const activeCards = roomSearch.filter((room) => room.status === 1);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(8)

    const lastPageIndex = currentPage * limit;
    const firstPageIndex = lastPageIndex - limit;
    const currentItems = activeCards.slice(firstPageIndex, lastPageIndex);

    const totalPage = activeCards.length

    useEffect(() => {
        dispatch(actFetchSearch(Number(param.size)))
    },[])
  return (
    <div className='room'>
        <div className='room-banner'>
            <BannerDefine title={"Search"}/>
        </div>
        <div className="room-container">
            {
              activeCards.length > 0 ? currentItems.map(room => {
                return(
                  <div key={room.id}>
                    <Card room={room}/>
                  </div>
                )
              }) : (<Default title={'Không tìm thấy phòng bạn muốn'}/>)
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

export default SearchPage