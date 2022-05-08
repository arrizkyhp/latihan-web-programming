import React, { useEffect, useState } from 'react'
import './createBlog.scss'
import { Button, Input, TextArea, Upload } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducer)
  const { title, body, image} = form;
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch()

  
  useEffect(() => {
    const id = props.router.params.id;
    if(id) {
      setIsUpdate(true)
      axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res => {
        console.log('image', image)
        dispatch(setForm('image', image))

        const data = res.data.data
        dispatch(setForm('title', data.title))
        dispatch(setForm('body', data.body))
        dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
        console.log("succes", res)
      })
      .catch( err => {
        console.log("err", err)
      })
    } else {
      dispatch(setForm('title', ""))
      dispatch(setForm('body', ""))
      dispatch(setImgPreview(""))
    }
  }, [])

  const handleSubmit = () => {
    const id = props.router.params.id;
    console.log("Form:", form.image)
    if(isUpdate) {
      console.log("Update Data")
      updateToAPI(form, id)
    } else {
      console.log("Create Data")
      postToAPI(form)
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    console.log(file)
    dispatch(setForm('image', file))
    // Generate Preview image
    dispatch(setImgPreview(URL.createObjectURL(file)))
  }

  return (
    <div className='blog-post'>
      <p className='title'>{isUpdate ? "Update" : "Create New"} Blog Page</p>
      <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))}/>
      <Upload onChange={onImageUpload} img={imgPreview}/>
      <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))}/>
      <div className="button-action">
        <Button title={isUpdate ? "update" : "save"} onClick={handleSubmit}/>
      </div>
    </div>
  )
}


// Withlcoation untuk react router dom v6
const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}
   

export default withRouter(CreateBlog)