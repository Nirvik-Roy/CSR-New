import React from 'react'
import './Sidebar.css'
import { NavLink } from "react-router-dom";
import logo from '../../assets/CSR (1).png'
import indian from '../../assets/Rectangle 27.png'
import icon from '../../assets/Rectangle 16.png'
import icon2 from '../../assets/Rectangle 16 (1).png'
import icon3 from '../../assets/Rectangle 16 (2).png'
import icon4 from '../../assets/Rectangle 16 (3).png'
import icon5 from '../../assets/Rectangle 16 (4).png'
import icon6 from '../../assets/Rectangle 16 (5).png'
import icon7 from '../../assets/Rectangle 16 (6).png'
import icon8 from '../../assets/Rectangle 16 (7).png'
import icon9 from '../../assets/Rectangle 16 (8).png'
import icon10 from '../../assets/Rectangle 16 (9).png'
import icon11 from '../../assets/Rectangle 16 (10).png'
import icon12 from '../../assets/Rectangle 16 (11).png'
import checkmark from '../../assets/check-mark (2) 1.png'
const Sidebar = () => {
  return (
    <>
        <div className='sidebar_wrapper'>
            <div className='head_wrapper'>
               <img style={{
                width:'90px'
               }} src={logo}/>
             <img src={indian} style={{
                width:'20px'
             }}/>
            </div>
            <div className='sidebar_links_wrapper'>


                <NavLink to='/welcome' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon} />
                <p>Name & Welcome</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>



                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon2} />
                <p>Partner Logos</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>



                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon3} />
                <p>CSR Module</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>


                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon4} />
                <p>Module Highlights</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>


                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon5} />
                <p>Module Library</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>


                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon6} />
                <p>CSR Social Page</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>


                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon7} />
                <p>CSR AI Chatbot</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>



                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon8} />
                <p>Loyalty Reward</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>


                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon9} />
                <p>Quiz</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>


                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon10} />
                <p>Games</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>



                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon11} />
                <p>Deployment</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>




                <NavLink to='/' className='sidebar_link'>
                <div className='sidebar_link_icon_wrapper'>
                <img style={{
                    width:'19px'
                }} src={icon12} />
                <p>Logout</p>
                </div>
                <img className='checkmark_img' src={checkmark}/>
                </NavLink>
 
            </div>
        </div>
    </>
  )
}

export default Sidebar