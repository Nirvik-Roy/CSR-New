import React from 'react'
import phoneimg from '../assets/iPhone 14 & 15 Pro Max - 2 (1).png'
const PartnerPhone = () => {
  return (
    <>
        <div className='partner_phone'>
            <div className='phone_head'></div>
            <img style={{
              position:'absolute',
              width:'100%',
            }} src={phoneimg}/>
        </div>
    </>
  )
}

export default PartnerPhone