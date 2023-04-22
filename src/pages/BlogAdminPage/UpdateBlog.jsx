import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { actFetchBlogById, actUpdateBlog } from '../../redux/features/blogSlice/blogSlice'
import './UpdateBlog.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const UpdateBlog = () => {
    const param = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {blog} = useSelector((state) => state.blogs)

    const [formData, setFormData] = useState(blog)
    const [contentUpdate, setContentUpdate] = useState(blog.content)
 
    useEffect(() => {
        dispatch(actFetchBlogById(Number(param?.idBlog)))
    },[param])

    useEffect(() => {
        setFormData(blog)
        setContentUpdate(blog.content)
    },[blog])

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleUpdate = () => {
        dispatch(actUpdateBlog(blog.id, {...formData, content: contentUpdate}))
        navigate('/admin/blog')
    }

    const handleBack = () => {
        navigate('/admin/blog')
    }
  return (
    <div className='update-blog'>
        <div className='top'>
            <h3>Update Blog</h3>
            <button onClick={handleBack}>Back</button>
        </div>
        <div className='main__form'>
            <form onSubmit={handleUpdate}>
                <div className="form-input">
                    <label>Title</label>
                    <input type="text" required placeholder='title' name='title' value={formData?.title} onChange={handleOnChange}/>
                </div>
                <div className="form-input">
                    <label>Image</label>
                    <input type="text" required name='image' value={formData?.image}  onChange={handleOnChange}/>
                </div>
                <div className="form-input">
                    <label>Content</label>
                    {/* <textarea cols="30" rows="10" name='content' value={formData?.content}  onChange={handleOnChange}></textarea> */}
                    <ReactQuill style={{height: '400px', marginBottom: '50px'}} theme="snow" name='content' value={contentUpdate} onChange={setContentUpdate}/>
                </div>
                <div className='form-btn'>
                <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateBlog