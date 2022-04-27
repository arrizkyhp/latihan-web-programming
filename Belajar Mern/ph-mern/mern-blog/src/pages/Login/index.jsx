import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Input, Link } from '../../components';

const Login = () => {
  return (
    <div className='main-page main-page--login'>
      <div className="left">
        <img src={LoginBg} alt="Mountain" />
      </div>
      <div className="right">
        <p className='title'>Login</p>
        <div className="form">
          <Input label="Email" placeholder="Email"/>
          <Input label="Password" placeholder="Password"/>
        </div>
        <Button title="Login" />
        <div className="back">
          <Link title="Belum punya akun, silahkan daftar" />
        </div>
      </div>
    </div>
  )
}

export default Login