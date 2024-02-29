import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import '../assets/styles/login.css'
import UsernameInput from '../components/UsernameInput'
import SubmitButton from '../components/SubmitButton'
import { useDispatch } from 'react-redux'
import { setUsername } from '../store/slices/userSlice'
import { registerNewUser } from '../utils/wssConnection/wssConnection'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = () => {
    dispatch(setUsername(name));
    registerNewUser(name);
    navigate('/dashboard');
  }
  return (
    <div className='login-page_container bg-main-color'>
      <div className='login-page_login_box bg-secondary-color'>
        <div className="login-page_logo_container">
          <img src={logo} alt='Video Talker' className='login-page_logo_image'/>
        </div>
        <div className="login-page_title_container text-main-color">
          <h2>Get on Board</h2>
        </div>
        <UsernameInput username={name} setUsername={setName} />
        <SubmitButton onClick={clickHandler} />
      </div>
    </div>
  )
}

export default LoginScreen