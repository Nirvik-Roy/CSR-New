import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/CSR.png'
import maillogo from '../../assets/ic_baseline-email.png'
import passwordlogo from '../../assets/Vector (1).png'
import ailogo from '../../assets/Group 1171277285.png'
import RegisterButton from '../../Components/RegisterButton'
import facebook from '../../assets/logos_facebook.png'
import google from '../../assets/flat-color-icons_google.png'
import apple from '../../assets/Vector (2).png'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [password, setPassword] = useState(false);
    const [countrydropdown, setCountryDropdown] = useState(false);
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
                                <h1>Welcome Back!</h1>
                                <div style={{
                                    width: '380px',
                                    marginTop: '20px'
                                }}>
                                    <p style={{
                                        color: '#808080',
                                        fontWeight: 400,
                                        fontSize: '16px',

                                    }}>ThankYou for getting back, please login to your
                                        account by filling these form</p>
                                </div>


                                <form className='login_form_container'>
                                    <div className='login_label_input_div'>
                                        <label>Email Address</label>
                                        <input type='text' placeholder='example@gmail.com' />
                                        <img style={{
                                            top: '52px'
                                        }} src={maillogo} />
                                    </div>


                                    <div className='login_label_input_div'>
                                        <label>Password</label>
                                        <input type={password ? 'password' : 'text'} placeholder='Enter Password' />
                                        <img style={{
                                            top: "52.5px",
                                            width: '15px'

                                        }} onClick={(() => {
                                            setPassword(!password)
                                        })} src={passwordlogo} />
                                    </div>

                                    <small>Forget Password?</small>



                                 


                                    <div style={{
                                        marginTop: '20px'
                                    }}>
                                        <RegisterButton name={'Login'} />
                                    </div>

                                    <div className='or_login_with_wrapper'>
                                        <p className='or_login_para'>Or Login With</p>

                                        <div className='login_methods_wrapper'>
                                        <div className='login_method1'>  <img src={facebook}/> </div>
                                        <div className='login_method1'>  <img src={google}/> </div>
                                        <div className='login_method1'>  <img style={{
                                            width:'15px'
                                        }} src={apple}/> </div>
                                        </div>

                                        <p className='dont_have_account_para'>Don't have an account ? <span onClick={(()=>{
                                            navigate('/register')
                                        })}>Register</span> </p>
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

export default Login