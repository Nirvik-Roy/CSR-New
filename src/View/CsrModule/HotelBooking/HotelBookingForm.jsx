import React from 'react'
import plus from '../../../assets/Rectangle 12510.png'
import TextEditor from '../../../Components/TextEditor/TextEditor'
import AssociatePartners from '../Environment/AssociatePartners.jsx'
import BackButton from '../../../Components/BackButton'
import RegisterButton from '../../../Components/RegisterButton'
const HotelBookingForm = () => {
    return (
        <>
            <div className='hotel_booking_form_wrapper' style={{
                marginTop: '-50px'
            }}>

                <form className='hotel_booking_form'>
                    <div className='hotel_form_input_div'>
                        <label>Hotel  Name <img src={plus} /></label>
                        <input placeholder='Enter Hotel Name' />
                    </div>


                    <div className='hotel_form_input_div'>
                        <label>Address </label>
                        <input placeholder='Enter address' />
                    </div>


                    <div className='hotel_form_input_div'>
                        <label>Description  </label>
                        <TextEditor />
                    </div>

                    <div className='hotel_form_input_div'>
                        <label>Upload Images <img src={plus} /></label>
                        <div style={{
                            width: '100%',
                            height: '48px',
                            borderRadius: '8px',
                            border: '1px solid #000',
                            position: 'relative'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                columnGap: '7px',
                                position: 'absolute',
                                top: '15px',
                                left: '10px'
                            }}>
                                <i style={{
                                    fontSize: '13px'
                                }} class="fa-solid fa-image"></i>
                                <p style={{
                                    fontSize: '15px',
                                }}>Upload</p>
                            </div>
                            <input style={{
                                opacity: '0'
                            }} type='file' />
                        </div>

                    </div>

                    <div className='two_inputs_wrapper'>
                    <div className='hotel_form_input_div' style={{
                        position:'relative'
                    }}>
                        <label>Type Of Room </label>
                        <i style={{
                                fontSize:'13px',
                                position:'absolute',
                                top:'52px',
                                right:'12px'
                            }} class="fa-solid fa-angle-down"></i>
                        <select>
                            <option>Deluxe</option>
                          
                        </select>
                    </div>


                    <div className='hotel_form_input_div'>
                        <label>Price </label>
                        <input placeholder='$10' />
                    </div>
                    </div>


                    <div className='hotel_form_input_div' style={{
                        position:'relative'
                    }}>
                        <label>Amenities </label>
                        <i style={{
                                fontSize:'13px',
                                position:'absolute',
                                top:'52px',
                                right:'12px'
                            }} class="fa-solid fa-angle-down"></i>
                        <select>
                            <option>Wifi</option>
                          
                        </select>
                    </div>


                    <div className='two_inputs_wrapper'>
                    <div className='hotel_form_input_div' style={{
                        position:'relative'
                    }}>
                        <label>Contact Person </label>
                        <input placeholder='Enter Name'/>
                    </div>


                    <div className='hotel_form_input_div'>
                        <label style={{
                            visibility:'hidden'
                        }}> Phone Number </label>
                        <input placeholder='Enter Phone Number' />
                    </div>
                    </div>

                    <div className='hotel_form_input_div'>
                        <label>Number Of Travelers </label>
                        <input placeholder='20' />
                    </div>


                    <div className='two_inputs_wrapper'>
                    <div className='hotel_form_input_div' style={{
                        position:'relative'
                    }}>
                        <label>Dates </label>
                        <input type='date' placeholder='Check In' />
                    </div>


                    <div className='hotel_form_input_div'>
                        <label style={{
                            visibility:'hidden'
                        }}> date </label>
                        <input  type='date' defaultValue={'Check Out'} placeholder='Check Out' />
                    </div>
                    </div>
                    

                    <div className='hotel_form_input_div'>
                        <label>Rating & Reviews </label>
                        <input placeholder='5 star by 100 People' />
                    </div>
               
                    <div className='hotel_form_input_div'>
                        <label>Mark as a  Feature Hotels</label>
                        <div className='hotel_form_checkbox_wrapper'>
                            <div style={{
                                display:'flex',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                columnGap:'10px'
                            }}>
                                <input type='radio'/>
                                <p style={{
                                    fontSize:'18px'
                                }}>Yes</p>
                            </div>

                            <div style={{
                                display:'flex',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                columnGap:'10px'
                            }}>
                                <input type='radio'/>
                                <p style={{
                                    fontSize:'18px'
                                }}>No</p>
                            </div>
                        </div>
                    </div>


                    <div className='hotel_form_input_div'>
                        <label>Mark as a Hotel in Front Page  </label>
                        <div className='hotel_form_checkbox_wrapper'>
                            <div style={{
                                display:'flex',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                columnGap:'10px'
                            }}>
                                <input type='radio'/>
                                <p style={{
                                    fontSize:'18px'
                                }}>Yes</p>
                            </div>

                            <div style={{
                                display:'flex',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                columnGap:'10px'
                            }}>
                                <input type='radio'/>
                                <p style={{
                                    fontSize:'18px'
                                }}>No</p>
                            </div>
                        </div>
                    </div>

                    <AssociatePartners/>

                    <div style={{
                        display:"flex",
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>
                        <div style={{
                            width:'150px'
                        }}>
                            <BackButton name='Back'/>
                        </div>

                        <div style={{
                            width:'150px'
                        }}>
                            <RegisterButton name='Save'/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HotelBookingForm