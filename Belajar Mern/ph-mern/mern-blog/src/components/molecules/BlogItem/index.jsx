import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogItem.scss'

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegisterBg} alt="post" />
        <div className="content-detail">
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date Post</p>
            <p className='body'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sequi molestiae exercitationem, deleniti tempore consectetur ipsa laborum in fugit sed.</p>
        </div>
    </div>
  )
}

export default BlogItem