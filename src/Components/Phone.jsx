import React from 'react'
import './Phone.css'
import logo from '../assets/image 11 (1).png';
import selectedlogo from '../assets/image (46).png'
import splashbg from '../assets/52cc0af407f72f9c82ab08627eedfda7.jpg'
import applogo from '../assets/app-logo.png'
const Phone = ({welcome,elseUrl,splash}) => {
  return (
    <>
        <div style={splash ?{
            display:'flex',
            flexDirection:'column',
            rowGap:'50px'
        }:{}} className='phone_div'>
        <div className='phone_head_wrapper'>
        <div className='phone_head'></div>
        </div>
          

            {welcome  && <img style={{
                width:'150px'
            }} src={logo}/>}

              {elseUrl  && <img style={{
                width:'180px'
            }} src={selectedlogo}/>}

            {splash && <>
              <img style={{
             position:'absolute',
             top:'0',
             left:'0',
             objectFit:'cover',
             width:'100%',
             height:'100%'
            }} src={splashbg}/>

            <img style={{
              zIndex:"99"
            }} src={applogo}/>

            <h2>Welcome to
            CSR APP</h2>
            </> 
            }
        </div>
        
    </>
  )
}

export default Phone