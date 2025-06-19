import React from 'react'
import {useNavigate} from 'react-router-dom'
const BackButton = (props) => {
    const navigate = useNavigate()
  return (
    <button onClick={(()=>{
        navigate(-1)
    })} className='back_button'>{props.name}</button>
  )
}

export default BackButton