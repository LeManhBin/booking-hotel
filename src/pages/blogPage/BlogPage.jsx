import React from 'react'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import './BlogPage.scss'
const BlogPage = () => {
  return (
    <div className='blog'>
        <div className='blog-banner'>
            <BannerDefine title={"Blog"}/>
        </div>
    </div>
  )
}

export default BlogPage