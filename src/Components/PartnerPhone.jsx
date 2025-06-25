import React from 'react'
import phoneimg from '../assets/iPhone 14 & 15 Pro Max - 2 (1).png'
const PartnerPhone = () => {
  return (
    <>
        <div className='phone_div'>
        <div className='phone_head_wrapper'>
        <div className='phone_head'></div>
        </div>
           
            <img style={{
              
              width:'100%',
              height:'100%'
           
            }} src={phoneimg}/>
        </div>
    </>
  )
}

export default PartnerPhone