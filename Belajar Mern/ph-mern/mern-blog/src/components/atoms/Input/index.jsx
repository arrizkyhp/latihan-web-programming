import React from 'react'
import './input.scss'

const index = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
        <p className='label'>{label}</p>
        <input className='input' placeholder='form' {...rest}/>
    </div>
  )
}

export default index