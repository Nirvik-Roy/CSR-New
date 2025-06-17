import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/CSR.png'
import ailogo from '../../assets/Group 1171277285.png'
import RegisterButton from '../../Components/RegisterButton'
import { useNavigate } from 'react-router-dom'
const Otp = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='login_bg'>
                <div className='login_register_container'>
                    <div className='login_register_Wrapper'>
                        <div className='left_login_register_wrapper'>
                            <div className='left_login_logo_wrapper'>
                                <div className='left_div_logo_bar'></div>
                                <div className='left_logo'>
                                    <img src={logo} />
                                </div>
                            </div>

                            <div className='login_register_form_wrapper'>
                                <h1>Enter Your Four Digit OTP</h1>
                                <div style={{
                                    width: '380px',
                                    marginTop: '20px'
                                }}>
                                    <p style={{
                                        color: '#808080',
                                        fontWeight: 400,
                                        fontSize: '16px',

                                    }}>We will send you a One Time Password on Your
                                        registered Email</p>
                                </div>


                                <form className='login_form_container'>
                                    <div className='otp_form_input_div_wrapper'>
                                        <input type='text' maxLength={1} />
                                        <input type='text' maxLength={1} />
                                        <input type='text' maxLength={1} />
                                        <input type='text' maxLength={1} />
                                    </div>
                                    <div style={{
                                        marginTop: '20px'
                                    }}>
                                        <RegisterButton name={'Login'} />
                                    </div>

                                    <div className='or_login_with_wrapper'>
                                        

                                        <p className='dont_have_account_para'>Didn’t receive the OTP ? <span onClick={(() => {
                                            navigate('/otp')
                                        })}>RESEND OTP</span> </p>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className='right_login_register_wrapper'>
                            <img src={ailogo} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Otp