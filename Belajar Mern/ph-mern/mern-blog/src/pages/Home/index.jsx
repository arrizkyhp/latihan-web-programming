import React, { useEffect, useState} from 'react'
import { BlogItem, Button } from '../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import { useDispatch, useSelector } from 'react-redux';
import { setDataBlog } from '../../config/redux/action';

const Home = () => {
  const [counter, setCounter] = useState(1)
  const [disablePreviousBtn, setDisablePreviousBtn] = useState(false)
  const [disableNextBtn, setDisableNextBtn] = useState(false)
  // const [dataBlog, setDataBlog] = useState([]);

  // const stateGlobal = useSelector(state => state)
  // const {dataBlogs, name} = useSelector(state => state)
  
  const { dataBlog, page } = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()

  const navigate = useNavigate();
  useEffect (() => {
    // Kondisi Disable Page Next/Previous
    parseInt(page.currentPage) === 1 ? setDisablePreviousBtn(true) : setDisablePreviousBtn(false)
    parseInt(page.currentPage) === page.totalPage ?  setDisableNextBtn(true) : setDisableNextBtn(false)


    dispatch(setDataBlog(counter))
  }, [dispatch, counter, page.currentPage]) 

  const handlePrevious = () => {
    setCounter(counter <= 1 ? 1 : counter -1)
  }
  const handleNext = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
  }

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
            _id={blog._id}
          /> 
          )
        })}

      </div>
      <div className="pagination-wrapper">
        <Button className={disablePreviousBtn ? "button-disabled" : ""} title="Previous"  onClick={handlePrevious}/>
        <p className='text-page-info'>{page.currentPage} / {page.totalPage}</p>
        <Button className={disableNextBtn ? "button-disabled" : ""} title="Next" onClick={handleNext}/>
      </div>
    </div>
  )
}

export default Home