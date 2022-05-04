import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'

const Button = ({title, linkUrl, to, ...rest}) => {

  if (linkUrl) {
    return (
      <Link className='button' to={to}>{title}</Link>
    )
  }
  return (
        <button className='button' {...rest}>{title}</button>
  )
}

export default Button