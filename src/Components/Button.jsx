import React from 'react'
import {useNavigate} from 'react-router-dom'
const Button = (props) => {
  const navigate = useNavigate()
  return (
    <div onClick={(()=>{props.name === 'Request to Check Collaborators' && navigate('/userUrl')})} className='request_button'>
    {props.environment && <i class="fa-solid fa-magnifying-glass"></i>}
    {props.name}</div>
  )
}

export default Button