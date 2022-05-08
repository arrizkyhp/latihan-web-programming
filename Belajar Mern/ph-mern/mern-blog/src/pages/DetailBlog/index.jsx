import React, { useEffect, useState } from 'react'
import dateFormat from 'dateformat';
import { Link } from '../../components'
import './detailBlog.scss'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const DetailBlog = (props) => {
  const [data, setData] = useState({})
  useEffect(() => {
    const id = props.router.params.id;
    axios.get(`http://localhost:4000/v1/blog/post/${id}`)
    .then(res => {
      // console.log("succes", res)
      setData(res.data.data)
    })
    .catch( err => {
      console.log("err", err)
    })

  }, [])

  // memakai kondisi karena useState nya object | jika tidak ada ini author name undefined
  if(data.author) {
    return (
      <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt="article thumb" />
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.author.name} - {dateFormat(data.createdAt, "dd, mmmm, yyyy")} </p>
        <p className='blog-content'>{data.body}</p>
        <Link to="/" title="Kembali ke Halaman utama" />
      </div>
    )
  } else {
    return <p>Getting Data.....</p>
  }
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

export default withRouter(DetailBlog)