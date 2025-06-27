import React from 'react'
import './BookingDetails.css'
import BookingDetailsPhone from '../../../Components/BookingDetailsPhone/BookingDetailsPhone'
import CsrHospitality from './CsrHospitality'
const BookingDetails = () => {
  return (
    <>
    <div className='booking_details_wrapper'>
      <div className='universal_container'>
        <div className='booking_details_content_wrapper'>
          <div className='center_layout'>
             <CsrHospitality/>
          </div>
          <BookingDetailsPhone/>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookingDetails