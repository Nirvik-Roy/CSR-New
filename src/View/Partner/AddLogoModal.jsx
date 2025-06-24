import React from 'react'
import img from '../../assets/image (58).png'
import logo from '../../assets/image (40).png'
import ModalButton from '../../Components/ModalButton'
const AddLogoModal = ({logoModal,setLogoModal}) => {
  return (
    <>
        <div className='search_logo_modal_wrappper' onClick={(()=>{
                setLogoModal(false)
            })}></div>
        <div className='logo_modal_div5652'>
            <img style={{
                width:'150px',
                height:"150px",
                borderRadius:'50%',
                position:"absolute",
                top:'-70px',
                left:'0',
                
            }} src={img}/>
            <h1>Enter Partner  Logo Details Below</h1>

            <div className='logo_add_wrapper45'>
                <div className='logo_form_left'>
                    <div className='logo_form_input_div'>
                        <label>Partner Name</label>
                        <input type='text' placeholder='Lorem '/>
                    </div>
                    <div className='logo_form_input_div' style={{
                        position:'relative'
                    }}>
                        <label>Logo</label>
                        <div className='upload_logo_div_56'>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        <p>Upload Logo</p>
                        </div>
                        <input style={{
                            position:'absolute',
                            top:'23px',
                            left:'0',
                            opacity:'0'
                        }} type='file'/>
                    </div>
                    <div className='logo_form_input_div'>
                        <label>Partner Name</label>
                        <input type='text' placeholder='Lorem '/>
                    </div>
                </div>
                <div className='logo_img_right'>
                    <img style={{
                        borderRadius:'20px'
                    }} src={logo}/>
                </div>
            </div>

            <div onClick={(()=>{
                setLogoModal(false)
            })} style={{
                width:'300px',
                marginInline:'auto',
                marginTop:"20px",
                cursor:'pointer',
            
            }}>
                <ModalButton name='Submit'/>
            </div>
        </div>
    </>
  )
}

export default AddLogoModal