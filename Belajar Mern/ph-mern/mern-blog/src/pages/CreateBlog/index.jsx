import React, { useState } from 'react'
import './createBlog.scss'
import { Button, Input, TextArea, Upload } from '../../components'
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage]= useState("");
  const [imagePreview, setImagePreview] = useState(null)

  const handleSubmit = () => {
    const data = new FormData();
    data.append('title', title)
    data.append('body', body)
    data.append('image', image)

    axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log('post success: ', res)
    })
    .catch(err => {
      console.log('err: ', err)
    })
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    setImage(file)
    // Generate Preview image
    setImagePreview(URL.createObjectURL(file))
  }

  return (
    <div className='blog-post'>
      <p className='title'>Create New Blog Page</p>
      <Input label="Post Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <Upload onChange={onImageUpload} img={imagePreview}/>
      <TextArea value={body} onChange={(e) => setBody(e.target.value)}/>
      <div className="button-action">
        <Button title="save" onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default CreateBlog