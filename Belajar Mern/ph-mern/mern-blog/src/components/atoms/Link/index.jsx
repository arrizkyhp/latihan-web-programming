import React from 'react'
import { Link } from 'react-router-dom'
import './link.scss'

const index = ({title, onClick, to, className}) => {
  const classNameProps = [className]; 
  
  return (
    <Link to={to} className={`link ${classNameProps.join(" ")}`} onClick={onClick}>{title}</Link>
  )
}

export default index