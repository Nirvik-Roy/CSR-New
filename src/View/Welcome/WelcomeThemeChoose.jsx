import React from 'react'
import RegisterButton from '../../Components/RegisterButton'
const WelcomeThemeChoose = () => {
  return (
    <>
         <div className='welcome_left_qr_Wrapper'>
                  <h3>Edit App Colors & Mode </h3>

                  <div className='primary_secondary_color_wrapper'>
                    <div className='primary_color_input_div'>
                      <label>Primary Color</label>
                      <input placeholder='6bb64a' />
                    </div>
                    <div className='primary_color_input_div'>
                    <label>Secondary Color</label>
                    <input placeholder='1d4354' />
                    </div>
                  </div>

                  <div className='light_mode_dark_mode_Wrapper'>
                    <div className='choose_mode_wrapper'>
                      <h2>Choose Which Mode You Would like</h2>

                      <div className='theme_mode_options'>
                        <div className='light_theme_option_wrapper'>
                          <input type='radio'/>
                          <p>Light Mode</p>
                        </div>


                        <div className='light_theme_option_wrapper'>
                          <input type='radio'/>
                          <p>Dark Mode</p>
                        </div>


                      </div>

                      
                    </div>
                    <div style={{
                      width:'150px'
                    }}>
                    <RegisterButton name='Continue'/>
                    </div>
                 
                  </div>
                </div>
    </>
  )
}

export default WelcomeThemeChoose