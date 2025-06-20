import React, { useState } from 'react'
import img from '../../assets/image (54).png'
import img2 from '../../assets/image (55).png'
import img3 from '../../assets/image (56).png'
import img4 from '../../assets/image (57).png'
import medal from '../../assets/image 18.png'
import RegisterButton from '../../Components/RegisterButton'
const PartnerLogos = () => {

   
    return (
        <>
            <div className='partner_logos_wrapper_div'>
                {[img, img2, img3, img4, img4, img4,].map((e, i) => {
                    return (
                        <>
                            <div key={i} className='partner_logo_main'>
                                <div className='partner_logo1'>
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
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <i class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                                <p>Company Logo</p>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default PartnerLogos