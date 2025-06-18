import React from 'react'
import img from '../../../assets/image (48).png'
import img2 from '../../../assets/image (49).png'
import img3 from '../../../assets/image (50).png'
import img4 from '../../../assets/image (51).png'
import img5 from '../../../assets/image (52).png'
import img6 from '../../../assets/image (53).png'
import RegisterButton from '../../../Components/RegisterButton.jsx'
const GalleryImage = () => {
  return (
    <>
     <div className='gallery_img_wrapper'>
     {[img,img2,img3,img4,img5,img6].map((e,i)=>{
        return(
            <>
            <div key={i} className='gallery_img'>
            <img src={e}/>
        </div>
            </>
        )
     })}
   
     </div>
     <div style={{
        width:"250px",
        marginInline:'auto',
        display:'flex',
        justifyContent:'center',
        marginTop:'20px'
     }}>
        <RegisterButton name={'View More'}>View More</RegisterButton>
     </div>
    </>
  )
}

export default GalleryImage