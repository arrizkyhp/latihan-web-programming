import React from 'react'
import './createBlog.scss'
import { Button, Input, TextArea, Upload } from '../../components'

const CreateBlog = () => {
  return (
    <div className='blog-post'>
      <p className='title'>Create New Blog Page</p>
      <Input label="Post Title"/>
      <Upload />
      <TextArea />
      <div className="button-action">
        <Button title="save" />
      </div>
    </div>
  )
}

export default CreateBlog