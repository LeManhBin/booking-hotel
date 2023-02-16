import React, { useState } from 'react'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import './RoomsPage.scss'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'
import { cardData } from '../../constants/cardData'
const RoomsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(8)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  const currentItems = cardData.slice(firstPageIndex, lastPageIndex);

  const totalPage = cardData.length
  return (
    <div className='room'>
        <div className='room-banner'>
            <BannerDefine title={"Sailing Hotel"}/>
        </div>
        <div className="room-container">
            {
              currentItems.map(card => {
                return(
                  <div key={card.id}>
                    <Card card={card}/>
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