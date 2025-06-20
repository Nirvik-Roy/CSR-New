import React from 'react'
import Phone from '../../../Components/Phone.jsx'
import './SplashScreen.css'
import SplashScreenTabs from './SplashScreenTabs.jsx'
const SplashScreen = () => {
    return (
        <>
        <div style={{
            paddingBottom:'30px'
        }}>
        <div className='universal_container'>
                <div className='splash_screen_wrapper'>
                    <div className='center_layout'>
                        <div className='custome_welcome_message_wrapper'>
                            <h5>Customize your splash screen with a background and welcome message</h5>

                            <div className='welcome_message_input_div'>
                                <textarea placeholder='Enter Your welcome message' type='text' />
                            </div>
                        </div>
                        <div className='select_options_wrapper'>Select One of the Options Below</div>
                        <SplashScreenTabs />
                    </div>
                    <Phone splash={true} />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default SplashScreen