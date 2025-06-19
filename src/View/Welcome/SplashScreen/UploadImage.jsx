import React from 'react'
import img from '../../../assets/Group 1171277287.png'
import RegisterButton from '../../../Components/RegisterButton'
const UploadImage = () => {
    
  return (
    <>
        <div className='upload_img_wrapper'>
            <h1>Upload Your own styles</h1>
            <div className='image_upload_your_own_wrapper'>
                <img src={img}/>
                <input type='file' multiple/>
            </div>

            <div style={{
                width:'150px',
                marginTop:'20px',
                marginLeft:'auto'
            }}>
                <RegisterButton name='Submit'/>
            </div>
        </div>
    </>
  )
}

export default UploadImage