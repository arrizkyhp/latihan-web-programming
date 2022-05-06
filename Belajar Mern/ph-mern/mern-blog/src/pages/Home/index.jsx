import React, { useEffect} from 'react'
import { BlogItem, Button } from '../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';

const Home = () => {
  // const [dataBlog, setDataBlog] = useState([]);

  // const stateGlobal = useSelector(state => state)
  // const {dataBlogs, name} = useSelector(state => state)
  
  const { dataBlog } = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()

  const navigate = useNavigate();

  useEffect (() => {
    dispatch(setDataBlog())
  }, [dispatch])

  return (
    <div className='home-page-wrapper'>
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => navigate('/create-blog')}/>
      </div>
      <div className="content-home-wrapper">
        {dataBlog.map(blog => {
          return ( 
          <BlogItem 
            key={blog._id}
            image={`http://localhost:4000/${blog.image}`}
            title={blog.title}
            name={blog.author.name}
            date={dateFormat(blog.createdAt, "dd, mmmm, yyyy")}
            body={blog.body}
          /> 
          )
        })}

      </div>
      <div className="pagination-wrapper">
        <Button title="Previous" />
        <Button title="Next" />
      </div>
    </div>
  )
}

export default Home