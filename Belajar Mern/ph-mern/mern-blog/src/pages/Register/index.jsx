import React from 'react'
import { RegisterBg } from '../../assets';
import { Button, Input, Link } from '../../components';
import './register.scss';

const Register = () => {
  return (
    <div className='main-page'>
      <div className="left">
        <img src={RegisterBg} alt="Mountain" />
      </div>
      <div className="right">
        <p className='title'>Register</p>
        <div className="form">
          <Input label="Full Name" placeholder="Full Name" />
          <Input label="Email" placeholder="Email"/>
          <Input label="Password" placeholder="Password"/>
        </div>
        <Button title="register" />
        <div className="back">
          <Link title="kembali ke Login" />
        </div>
      </div>
    </div>
  )
}

export default Register