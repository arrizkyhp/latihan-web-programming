import React from 'react'
import { Link } from 'react-router-dom'
import './button.scss'

const Button = ({title, className, linkUrl, to, ...rest}) => {
  const classButton = [className];

  if (linkUrl) {
    return (
      <Link className={`button ${classButton.join(" ")}`} to={to}>{title}</Link>
    )
  }
  return (
        <button className={`button ${classButton.join(" ")}`} {...rest}>{title}</button>
  )
}

export default Button