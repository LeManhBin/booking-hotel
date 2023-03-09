import React from 'react'
import BannerDefine from '../../components/BannerDefine/BannerDefine'
import useScrollToTop from '../../hooks/useScrollToTop'
import './BlogPage.scss'
const BlogPage = () => {
  useScrollToTop()
  return (
    <div className='blog'>
        <div className='blog-banner'>
            <BannerDefine title={"Blog"}/>
        </div>
        
    </div>
  )
}

export default BlogPage