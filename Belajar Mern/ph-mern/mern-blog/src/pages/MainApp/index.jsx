import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../../components'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import './mainApp.scss'

const index = () => {
  return (
    <div className='main-app-wrapper'>
        <Header />
        <div className="content-wrapper">
            <Routes>
                <Route path='/create-blog/' element={<CreateBlog />} />
                <Route path='/create-blog/:id' element={<CreateBlog />} />
            </Routes>
            <Routes>
                <Route exact path='/detail-blog/:id' element={<DetailBlog />} />
            </Routes>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default index