import React from 'react'
import './Phone.css'
import logo from '../assets/image 11 (1).png'
const Phone = ({welcome}) => {
  return (
    <>
        <div className='phone_div'>
            <div className='phone_head'></div>
            {welcome  && <img style={{
                width:'150px'
            }} src={logo}/>}
        </div>
    </>
  )
}

export default Phone