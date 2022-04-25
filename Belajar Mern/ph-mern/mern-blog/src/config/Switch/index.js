import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '../../pages'

const Switch = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/' element={<Home />} />
        </Routes>
    </Router>
  )
}

export default Switch