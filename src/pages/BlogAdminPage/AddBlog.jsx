import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actCreateBlog } from '../../redux/features/blogSlice/blogSlice'

const initialBlog = {
    title: '',
    image: '',
    content: '',
}
const AddBlog = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [blogState, setBlogState] = useState(initialBlog)
    

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setBlogState({
            ...blogState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actCreateBlog(blogState))
        navigate('/admin/blog')
    }
    const handleBack = () => {
        navigate('/admin/blog')
    }

  return (
    <div className='addnew-container'>
        <div className='top'>
            <h3>Add new Blog</h3>
            <button onClick={handleBack}>Back</button>
        </div>
        <div className='main__form'>
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <label>Title</label>
                    <input type="text" required placeholder='title' name='title' value={blogState.title} onChange={handleOnChange}/>
                </div>
                <div className="form-input">
                    <label>Image</label>
                    <input type="text" required name='image' value={blogState.image} onChange={handleOnChange}/>
                </div>
                <div className="form-input">
                    <label>Content</label>
                    <textarea cols="30" rows="10" name='content' value={blogState.content} onChange={handleOnChange}></textarea>
                </div>
                <div className='form-btn'>
                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddBlog