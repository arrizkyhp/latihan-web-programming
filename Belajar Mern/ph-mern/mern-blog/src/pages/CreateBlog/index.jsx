import React from 'react'
import './createBlog.scss'
import { Button, Input, TextArea, Upload } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action';

const CreateBlog = () => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducer)
  const { title, body} = form;
  const dispatch = useDispatch()

  const handleSubmit = () => {
   postToAPI(form)
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    dispatch(setForm('image', file))
    // Generate Preview image
    dispatch(setImgPreview(URL.createObjectURL(file)))
  }

  return (
    <div className='blog-post'>
      <p className='title'>Create New Blog Page</p>
      <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
      <Upload onChange={onImageUpload} img={imgPreview}/>
      <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
      <div className="button-action">
        <Button title="save" onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default CreateBlog