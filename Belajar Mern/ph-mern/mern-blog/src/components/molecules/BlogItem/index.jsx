import React from 'react'
import { RegisterBg } from '../../../assets'
import { Button } from '../../atoms'
import './blogItem.scss'

const BlogItem = (props) => {
  // destructuring
  const {image, title, name, date, body} = props;
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt="post" />
        <div className="content-detail">
            <p className='title'>{title}</p>
            <p className='author'>{name} - {date}</p>
            <p className='body'>{body}</p>
            <Button title="View Detail" linkUrl to="/detail-blog" />
        </div>
    </div>
  )
}

export default BlogItem