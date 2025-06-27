import React from 'react'
import HotelBookingPhone from '../../../Components/HotelBookingPhone/HotelBookingPhone'
import './HotelBooking.css'
import HotelBookingForm from './HotelBookingForm'
import RegisterButton from '../../../Components/RegisterButton'
const HotelBooking = () => {
  return (
    <>
        <div className='hotel_booking_wrapper'>
            <div className='universal_container'>
                <div className='hotel_booking_content_wrapper'>
                    <div className='center_layout'>
                    <div style={{
                        width:'300px',
                        marginLeft:'auto',
                        transform:'translateY(-75px)'
                    }}>
                        <RegisterButton name="Click here to view"/>
                    </div>
                        <HotelBookingForm/>
                    </div>
                    <HotelBookingPhone/>
                </div>
            </div>
        </div>
    </>
  )
}

export default HotelBooking