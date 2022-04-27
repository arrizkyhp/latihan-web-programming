import React from 'react'
import { BlogItem, Button } from '../../components'
import './home.scss'

const Home = () => {
  return (
    <div className='home-page-wrapper'>
      <div className="create-wrapper">
        <Button title="create blog" />
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