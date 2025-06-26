import React, { useState } from 'react'
import './Partner.css'
import PartnerPhone from '../../Components/PartnerPhone'
import PartnerLogos from './PartnerLogos'
import AddLogoModal from './AddLogoModal'
import plus from '../../assets/Vector (4).png'
const LibraryLogos = () => {
  return (
    <>
        <div style={{
                paddingBottom: '30px'
            }}>
                <div className='universal_container'>
                <input style={{
                    width:'300px',
                    height:'40px',
                    color:'grey',
                    background:'#F2F2F2',
                    padding:'0px 10px',
                    fontSize:'16px',
                    borderRadius:'5px',
                    border:'1px solid grey',
                    outline:'none',
                    marginBottom:'20px'
                }} placeholder='Search Logo'/>
                    <div className='partner_wrapper'>
                        <div className='center_layout' >
                            <div className='partner_logos_wrapper'>
                                <h3>Library Logos</h3>
                                {/* <div className='partner_logos_button_wrapper'>
                                    <button onClick={(()=>setLogoModal(true))}>+Add Logo</button>
                                    <button onClick={(() => setSearch(true))}><i class="fa-solid fa-magnifying-glass"></i> Search.......</button>
                                    <button>+Choose From My Library</button>
                                </div> */}
                            </div>

                            <PartnerLogos library={true} />
                        </div>
                        <PartnerPhone />
                    </div>
                </div>
            </div>
    </>
  )
}

export default LibraryLogos