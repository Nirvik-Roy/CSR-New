import React, { useState } from 'react'
import './Partner.css'
import PartnerPhone from '../../Components/PartnerPhone'
import PartnerLogos from './PartnerLogos'
import img from '../../assets/image (54).png'
import img2 from '../../assets/image (55).png'
import img3 from '../../assets/image (56).png'
import img4 from '../../assets/image (57).png'
import medal from '../../assets/image 18.png'
import RegisterButton from '../../Components/RegisterButton'
import ModalButton from '../../Components/ModalButton'
const Partner = () => {
  const [search , setSearch] =useState(false)
  const SearchModal = () =>{
    return(
        <>
            <div className='search_logo_modal_wrappper' onClick={(()=>{setSearch(false)})}></div>
            <div className='search_logo_modal'>
                <div className='search_logo_input_div'>
                    <input placeholder='Search...' defaultValue={'Birds'}/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='partner_logos_wrapper_div' style={{
                    marginTop:'40px',
                    marginBottom:'40px'
                }}>
                {[img, img2, img3, img4, img4, img4,].map((e, i) => {
                return (
                    <>
                        <div key={i} className='partner_logo_main'>
                            <div className='partner_logo1 modal_partner_logo'>
                                <img className='partner_logo_img' src={e} />
                                <img style={{
                                    width:'45px',
                                    position:'absolute',
                                    top:'10px',
                                    left:'10px'
                                }} src={medal} />

                                <div style={{
                                    display:'flex',
                                    justifyContent:'flex-start',
                                    alignItems:'center',
                                    fontSize:'17px',
                                    color:'var(--primary-color)',
                                    columnGap:'8px',
                                    position:'absolute',
                                    top:'10px',
                                    right:'10px',
                                    cursor:'pointer'
                                }}>
                           <i class="fa-regular fa-circle-xmark"></i>
                                
                                </div>
                            </div>
                            <p>Company Logo</p>
                        </div>
                    </>
                )
            })}
                </div>

                <div onClick={(()=>{setSearch(false)})} style={{
                    width:'200px',
                    marginInline:'auto'
                }}>
                 <ModalButton name="Submit"/>
                </div>
            </div>
        </>
    )
}
  return (
    <>
    {search && <SearchModal/>}
        <div style={{
            paddingBottom:'30px'
        }}>
          <div className='universal_container'>
            <div className='partner_wrapper'>
              <div className='center_layout' >
               <div className='partner_logos_wrapper'>
                <h3>Partner Logos</h3>
                <div className='partner_logos_button_wrapper'>
                  <button>+Add Logo</button>
                  <button onClick={(()=>setSearch(true))}><i class="fa-solid fa-magnifying-glass"></i> Search.......</button>
                  <button>+Choose From My Library</button>
                </div>
               </div>

               <PartnerLogos/>
              </div>
              <PartnerPhone/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Partner