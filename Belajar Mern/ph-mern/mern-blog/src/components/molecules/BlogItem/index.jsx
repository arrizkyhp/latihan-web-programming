import React from 'react'
import { Button, Link } from '../../atoms'
import './blogItem.scss'

const BlogItem = (props) => {
  // destructuring
  const {image, title, name, date, body, _id, onDelete} = props;
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt="post" />
        <div className="content-detail">
            <div className="content-info">
              <div className="left">
                <p className='title'>{title}</p>
                <p className='author'>{name} - {date}</p>
              </div>
              <div className="right">
                <Link className='edit' title="✏️Edit " to={`/create-blog/${_id}`}/>
                <p className='delete' onClick={() => onDelete(_id)}>❌Delete </p>
              </div>
            </div>
            <p className='body'>{body}</p>
            <Button title="View Detail" linkUrl to={`/detail-blog/${_id}`} />
        </div>
    </div>
  )
}

export default BlogItem