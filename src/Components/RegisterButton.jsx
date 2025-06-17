import React from 'react'
import './Button.css'
const RegisterButton = (props) => {
  return (
    <button className='register_button'>{props.name}</button>
  )
}

export default RegisterButton