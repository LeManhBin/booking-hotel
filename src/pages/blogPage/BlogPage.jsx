import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import Pagination from '../../components/Pagination/Pagination'
import useScrollToTop from '../../hooks/useScrollToTop'
import { actFetchAllBlog } from '../../redux/features/blogSlice/blogSlice'
import './BlogPage.scss'
const BlogPage = () => {
  useScrollToTop()
  const {allBlog} = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(6)

  const lastPageIndex = currentPage * limit;
  const firstPageIndex = lastPageIndex - limit;
  let currentItems = allBlog.slice(firstPageIndex, lastPageIndex);

  const totalPage = allBlog.length

  useEffect(() => {
    dispatch(actFetchAllBlog())
  },[])

  const handleShowBlogDetail = (id) => {
    navigate(`/blog/${id}`)
  }


  const handleFilterBlog = () => {
    return currentItems = allBlog.filter((blog) => {
      return blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  const options = { day: '2-digit', month: 'short' };
  const today = new Date().toLocaleString('en-US', options);
  console.log(today);

  const handleSearch = () => {
    handleFilterBlog()
  }

  return (
    <div className='blog'>
        <div className='blog-banner'>
            <BannerDefine title={"Blog"}/>
        </div>
        <div className='blog-container'>
          <div className='search__blog'>
              <div className='search__blog--heading'>
                  <h2>Đây là trang blog xịn xò con bò</h2>
                  <span>Chào mừng bạn đến với blog, nơi chia sẻ thông tin và sự kiện của khách sạn</span>
              </div>
              <div className='search__blog--input'> 
                  <input type="text" placeholder='Input...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                  <button onClick={handleSearch}>Search</button>
              </div>
          </div>
          <div className='blog-content'>
              {
                currentItems.map((data) => {
                  return(
                    <div className="content-container" key={data.id}>
                      <img src={data.image} alt="" />
                      <div className='content-desc'>
                          <div className='desc-text'>
                            <h3>{data.title}</h3>
                            <p>
                              {data.content}
                            </p>
                          </div>
                          <span onClick={() => handleShowBlogDetail(data.id)}>Read More <i className="fa-solid fa-arrow-right-long"></i></span>
                      </div>
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
    </div>
  )
}

export default BlogPage