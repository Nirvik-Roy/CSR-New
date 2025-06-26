import React from 'react'
import './Header.css'
import Sidebar from '../Sidebar/Sidebar';
import img from '../../assets/image (44).png'
import angledown from '../../assets/Vector (3).png'
import step from '../../assets/Group 72162.png';
import step2 from '../../assets/Group 72162 (1).png'
const Header = ({ welcome, splash, partner,module,environment,moduleHighlight }) => {
  return (
    <>
      <Sidebar />
      <div className='universal_container ' >
        <div className='header_wrapper' >
          {welcome && <div className='header_heading_step_wrapper'>


            <h1>Lets’ Build your App in a few clicks</h1>
            <div className='step_img'>
              <img className='step_img' src={step} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <small style={{
                  color: 'var(--black)'
                }}>Name & Logo</small>
                <small style={{
                  color: 'var(--black)'
                }}>Splash</small>
              </div>
            </div>


          </div>}


          {splash && <>

            <div className='header_heading_step_wrapper'>
              <h1>Customise Your App</h1>
            </div>

            <div className='step_img'>
              <img className='step_img' src={step2} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <small style={{
                  color: 'var(--black)'
                }}>Name & Logo</small>
                <small style={{
                  color: 'var(--black)'
                }}>Splash</small>
              </div>
            </div>
          </>
          }

          {partner && <>
            <h1>Partner Logos</h1>
          </>}

          {module && <>
            <h1>CSR Module </h1>
          </>}


          {moduleHighlight && <>
            <h1>Module Highlight </h1>
          </>}

          {environment && <>
            <h1>Showcase Your CSR & ESG Projects </h1>
            <div className='step_img'>
              <img className='step_img' src={step} />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
            
              </div>
            </div>
          </>}

          <div className='header_img_wrapper'>
            <div className='header_img_name_Wrapper'>
              <img style={{
                width: '50px'
              }} src={img} />
              <p>Natascha Feri</p>
            </div>

            <div>
              <img src={angledown} />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Header