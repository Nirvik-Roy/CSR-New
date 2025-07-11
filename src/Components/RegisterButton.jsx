import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'
const RegisterButton = ({name}) => {
  const navigate = useNavigate()
  return (
    <button onClick={(()=>name === 'Register' ? navigate('/login') : name === 'Login' ? navigate('/welcome'):'')}  className='register_button'>{name}</button>
  )
}

export default RegisterButton