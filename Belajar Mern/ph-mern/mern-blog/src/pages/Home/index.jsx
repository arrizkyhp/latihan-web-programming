import React from 'react'
import { BlogItem, Button } from '../../components'
import './home.scss'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home-page-wrapper'>
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => navigate('/create-blog')}/>
      </div>
      <div className="content-home-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination-wrapper">
        <Button title="Previous" />
        <Button title="Next" />
      </div>
    </div>
  )
}

export default Home