import React from 'react'
import logo from '../../../assets/image 11 (1).png'
const EditLogo = () => {
  return (
    <>
        <div className='else_logo_edit_wrapper'>
            <div className='else_logo_wrapper'>
                <h6>Logo</h6>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'end'
                }}>
                <img src={logo}/>
                <i style={{
                    color:'var(--grey)'
                }}  class="fa-solid fa-pen-to-square"></i>
                </div>
                
            </div>

            <h5>Edit Your Logo colors <span>
                <i class="fa-solid fa-pencil"></i>
                </span></h5>

                <div className='logo_primary_secondary_colors_wrapper'>
                    <div className='logo_primary_color_main'>
                        <p>Primary Color</p>
                        <div className='logo_color_circle'></div>
                    </div>

                    <div className='logo_primary_color_main'>
                        <p>Secondary Color</p>
                        <div className='logo_color_circle2'></div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default EditLogo