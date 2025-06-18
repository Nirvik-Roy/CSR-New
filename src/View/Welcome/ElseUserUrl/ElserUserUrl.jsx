import React, { useState } from 'react'
import './ElseUserUrl.css'
import Phone from '../../../Components/Phone'
import ElseUserApp from './ElseUserApp'
import EditLogo from './EditLogo'
import WelcomeThemeChoose from '../WelcomeThemeChoose.jsx'
import WelcomeQr from '../WelcomeQr.jsx'
import modalImg from '../../../assets/image (47).png'
const ElserUserUrl = () => {
  const [modal,setModal]=useState(true)
   const SameUrlmodal = () =>{
    return(
      <>
        <div onClick={(()=>{
          setModal(false)
        })} className='same_url_modal_Wrapperr'></div>
        <div className='same_url_modal_div'> 
        <img className='modal_img' src={modalImg}/>

        <h1>Take a look at who is using the same URL like you</h1>

        <form className='modal_form_wrapper'>
          <div className='modal_form_input_div'>
            <label>Name</label>
            <input placeholder='Lorem Ipsum' type='text'/>
          </div>


          <div className='modal_form_input_div'>
            <label>Email id</label>
            <input placeholder='lorem@gmail.com' type='text'/>
          </div>



          <div className='modal_form_input_div'>
            <label>Country Details</label>
            <input placeholder='India' type='text'/>
          </div>



          <div className='modal_form_input_div'>
            <label>Contact</label>
            <input placeholder='23*******45' type='text'/>
          </div>
        </form>
          </div>
      </>
    )
   }

  return (
    <>
    {modal && <SameUrlmodal/>}
      <div className='else_user_wrapper'>
        <div className='universal_container'>
            <div className='else_user_box_wrapper'>
                <div className='center_layout'>
                    <ElseUserApp/>
                    <EditLogo/>
                    <WelcomeThemeChoose/>
                    <WelcomeQr/>
                </div>
                <Phone elseUrl={true}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ElserUserUrl