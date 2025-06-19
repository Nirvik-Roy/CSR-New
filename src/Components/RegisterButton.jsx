import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'
const RegisterButton = (props) => {
  const navigate = useNavigate()
  return (
    <button  className='register_button'>{props.name}</button>
  )
}

export default RegisterButton