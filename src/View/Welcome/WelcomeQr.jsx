import React from 'react'
import Button from '../../Components/Button';
import qr from '../../assets/image 13 (1).png';
import {useNavigate} from 'react-router-dom'
const WelcomeQr = () => {
  const navigate = useNavigate()
  return (
    <>
         <div className='welcome_left_qr_Wrapper'>
                  <h3>We noticed someone else in your organisation created a CSR App</h3>
                  <div className='csr_mobile_app_wrapper'>
                    <div className='csr_mobile_app_left'></div>
                    <div className='csr_mobile_app_center'>
                      <h6>CSR Mobile Application</h6>
                      <p>Hi x, we noticed someone else in your organisation created a CSR APP on the following link.</p>
                    <Button name={'Request to Check Collaborators'}/>
                    </div>
                    <div className='csr_mobile_app_right'>
                      <img src={qr}/>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default WelcomeQr