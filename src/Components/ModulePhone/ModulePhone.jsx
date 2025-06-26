import React from 'react'
import './ModulePhone.css'
import banner from '../../assets/Group 1171275806.png'
import avatar from '../../assets/Ellipse 1.png'
import booking from '../../assets/booking 1 (1).png'
import booking2 from '../../assets/booking 2 (1).png'
import booking3 from '../../assets/booking 3.png'
import booking4 from '../../assets/booking 4.png'
import apps from '../../assets/9 Apps.png'
import companylogo from '../../assets/Group 1171276173.png'
const ModulePhone = () => {
  return (
    <>
      <div className='phone_div' style={{
        background: '#000'
      }}>
        <div className='phone_head_wrapper'>
          <div className='phone_head'></div>

        </div>
        <div className='module_phone_content_wrapper'>

          <div className='module_phone_head_wrapper' style={{
            display: 'flex',

          }}>
            <img src={avatar} />
            <div>
              <h6>Good  morning</h6>
              <h5>Hi, Lorem</h5>
            </div>
          </div>
          <img className='module_img_wrapper' src={banner} />
          <div className='iwokrama_highlights_wrapper'>
            <h6>Iwokrama</h6>

            <div className='iwokrams_high_boxex_Wrapper'>
              <div className='iwokrama_box'>
                <div className='iwokrama_img'>
                  <img src={booking} />
                </div>
                <p>Bookings</p>
              </div>

              <div className='iwokrama_box'>
                <div className='iwokrama_img'>
                  <img src={booking2} />
                </div>
                <p>Forest</p>
              </div>

              <div className='iwokrama_box'>
                <div className='iwokrama_img'>
                  <img src={booking3} />
                </div>
                <p>Sample</p>
              </div>

              <div className='iwokrama_box'>
                <div className='iwokrama_img'>
                  <img src={booking4} />
                </div>
                <p>Sample</p>
              </div>
            </div>

          </div>

          <img style={{
            width:'98%',
            margin:'15px 0px 10px 0px'
          }} src={companylogo}/>
          <p style={{
            color: '#fff',
            fontWeight: '600',
            fontSize: '17px',
            paddingLeft: '5px',
            paddingTop: '5px',
            paddingBottom: '10px'
          }}>Explore</p>
          <div>
            <img style={{
              width: '98%'
            }} src={apps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ModulePhone