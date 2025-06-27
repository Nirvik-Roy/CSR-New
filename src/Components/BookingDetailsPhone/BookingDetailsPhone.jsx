import React from 'react'
import './BookingDetailsPhone.css'
import banner from '../../assets/Group 1171277293.png'
const BookingDetailsPhone = () => {
  return (
    <>
        <div className='phone_div' style={{
            background:'#fff'
        }}>
            <div className='phone_head_wrapper'>
                <div className='phone_head'></div>

             
            </div>

            <div className='booking_details892' style={{
                  width:'100%',
                  height:'100%',
                  paddingTop:'35px',
                  
                }}>
                  <h5 style={{
                    fontSize:"22px",
                    paddingLeft:'10px'
                  }}>Explore</h5>
                  
                  <img src={banner} style={{
                    width:'90%',
                    marginInline:'auto',
                    display:'block',
                    marginTop:'10px'
                  }}/>
                </div>
        </div>
    </>
  )
}

export default BookingDetailsPhone