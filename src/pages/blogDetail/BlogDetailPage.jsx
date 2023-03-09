import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actFetchBlogById } from '../../redux/features/blogSlice/blogSlice'
import './BlogDetailPage.scss'
const BlogDetailPage = () => {
    const dispatch = useDispatch()
    const {blog} = useSelector((state) => state.blogs)
    const param = useParams()


    useEffect(() => {
        dispatch(actFetchBlogById(Number(param.id)))
    },[])
  return (
    <div className='blog-detail-container'>
        <h1>{blog.title}</h1>
        <img src={blog.image} alt="" />
        <p>
            {blog.content}
        </p>
    </div>
  )
}

export default BlogDetailPage