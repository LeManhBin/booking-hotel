import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'
import { actDeleteBlog, actFetchAllBlog } from '../../redux/features/blogSlice/blogSlice'
import './BlogAdminPage.scss'
const BlogAdminPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {allBlog} = useSelector((state) => state.blogs)
    
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10)

    const lastPageIndex = currentPage * limit;
    const firstPageIndex = lastPageIndex - limit;
    const currentItems = allBlog.slice(firstPageIndex, lastPageIndex);

    const totalPage = allBlog.length

    useEffect(() => {
        dispatch(actFetchAllBlog())
    },[])
    const handleAddNewPage = () => {
        navigate('/admin/add-new-blog')
    }

    const handleDeleteBlog = (id) => {
        dispatch(actDeleteBlog(id))
    }

    const handleViewUpdate = (id) => {
        navigate(`/admin/blog-update/${id}`)
    }
  return (
    <div className='blog-admin-page'>
        <div className="heading">
            <h2>Blog</h2>
            <button onClick={handleAddNewPage}>Add new blog</button>
        </div>
        <div className='blog-admin-container'>
           {
            currentItems.map(blog => {
                return(
                    <div className='blog' key={blog.id}>
                        <img src={blog.image} alt="" />
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                        <div className='action'>
                            <button onClick={() => handleViewUpdate(blog.id)}>Edit</button>
                            <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
                        </div>
                    </div>
                )
            })
           }
        </div>
        <div className='pagination' style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Pagination
            currentPage={currentPage}
            limit={limit}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            background={'#AEE2FF'}
        />
        </div>
    </div>
  )
}

export default BlogAdminPage