import React from 'react'
import './Phone.css'
import logo from '../assets/image 11 (1).png';
import selectedlogo from '../assets/image (46).png'
const Phone = ({welcome,elseUrl}) => {
  return (
    <>
        <div className='phone_div'>
            <div className='phone_head'></div>
            {welcome  && <img style={{
                width:'150px'
            }} src={logo}/>}
              {elseUrl  && <img style={{
                width:'180px'
            }} src={selectedlogo}/>}
        </div>
    </>
  )
}

export default Phone