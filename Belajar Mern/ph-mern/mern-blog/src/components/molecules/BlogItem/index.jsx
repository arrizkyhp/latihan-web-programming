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
            <p className='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consectetur distinctio adipisci a dicta dolore, dolor neque eveniet qui enim ratione architecto totam voluptatum at perspiciatis deserunt cumque. Porro accusamus odit voluptas sed nobis, blanditiis cupiditate ratione. Consectetur, possimus impedit consequuntur sit debitis ipsa est corporis consequatur architecto corrupti optio pariatur officia deleniti mollitia numquam tempora. Earum, inventore quidem cum ea voluptate animi porro sit assumenda minus obcaecati repellendus a perferendis suscipit fuga enim tempora possimus tempore molestias iste laudantium! Assumenda culpa veniam amet porro sapiente consequuntur iure, maxime pariatur cum voluptatibus in rem architecto quia vero ratione aut ipsam.</p>
        </div>
    </div>
  )
}

export default BlogItem