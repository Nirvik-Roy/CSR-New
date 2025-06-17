import React from 'react'
import './Welcome.css'
import Phone from '../../Components/Phone'
import WelcomeQr from './WelcomeQr'
import WelcomeApp from './WelcomeApp'
import WelcomeThemeChoose from './WelcomeThemeChoose'
const Welcome = () => {
  return (
    <>
        <div className='welcome_wrapper'>
          <div className='universal_container'>
            <div className='welcome_boxs_Wrapper'>
              <div className='welcome_left'>
                <WelcomeQr/>
               <WelcomeApp/>
               <WelcomeThemeChoose/>
              </div>
              <Phone welcome={true}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Welcome