import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'
import PopUpDelete from '../../components/PopUpDelete/PopUpDelete'
import { actDeleteBlog, actFetchAllBlog } from '../../redux/features/blogSlice/blogSlice'
import './BlogAdminPage.scss'
const BlogAdminPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isShowPopUp, setIsShowPopUp] = useState(false)
    const [idTemp, setIdTemp] = useState()
    const {allBlog} = useSelector((state) => state.blogs)
    const [searchTerm, setSearchTerm] = useState("");
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

    const handleDelete = (id) => {
        dispatch(actDeleteBlog(id))
    }

    const  handleShowPopUpDelete = (id) => {
        setIsShowPopUp(true)
        setIdTemp(id)  
    }
    const handleViewUpdate = (id) => {
        navigate(`/admin/blog-update/${id}`)
    }

    const handleFilterBlog = () => {
        return allBlog.filter((blog) => {
          return blog.title.toLowerCase().includes(searchTerm.toLowerCase());
        }).slice(firstPageIndex, lastPageIndex);
      }
  return (
    <div className='blog-admin-page'>
        {
            isShowPopUp && (<PopUpDelete setIsShowPopUp={setIsShowPopUp} handleDelete={handleDelete} idTemp={idTemp} title={"Bạn có chắc với thao tác này ?"}/>)
        }
        <div className="heading">
            <h2>Blog</h2>
            <button onClick={handleAddNewPage}>Add new blog</button>
        </div>
        <div className='search-container'>
            <input type="text" placeholder='Enter title...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className='blog-admin-container'>
           {
            handleFilterBlog().map(blog => {
                return(
                    <div className='blog' key={blog.id}>
                        <img src={blog.image} alt="" />
                        <h3 className='title'>{blog.title}</h3>
                        <div className='content' dangerouslySetInnerHTML={{__html: blog.content}}>

                        </div>
                        <div className='action'>
                            <button onClick={() => handleViewUpdate(blog.id)}>Edit</button>
                            <button onClick={() => handleShowPopUpDelete(blog.id)}>Delete</button>
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