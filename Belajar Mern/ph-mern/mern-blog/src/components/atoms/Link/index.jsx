import React from 'react'
import './link.scss'

const index = ({title, onClick}) => {
  return (
    <a className='link' onClick={onClick}>{title}</a>
  )
}

export default index