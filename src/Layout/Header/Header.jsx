import React from 'react'
import './Header.css'
import Sidebar from '../Sidebar/Sidebar';
import img from '../../assets/image (44).png'
import angledown from '../../assets/Vector (3).png'
import step from '../../assets/Group 72162.png'
const Header = () => {
  return (
    <>
        <Sidebar/>
        <div className='universal_container header_wrapper'>
        <div className='header_heading_step_wrapper'>
        <h1>Lets’ Build your App in a few clicks</h1>
        <img className='step_img' src={step}/>
        </div>
           
            <div className='header_img_wrapper'>
            <div className='header_img_name_Wrapper'>
            <img style={{
                width:'50px'
            }} src={img}/>
            <p>Natascha Feri</p>
            </div>
            
               <div>
               <img src={angledown}/>
               </div>
         
            </div>
        </div>
    </>
  )
}

export default Header