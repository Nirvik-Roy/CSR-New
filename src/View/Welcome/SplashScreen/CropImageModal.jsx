import React, { useEffect, useState } from 'react'
import img from '../../../assets/image (50).png'
import Cropper from 'react-easy-crop'
const CropImageModal = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [range,setrange] = useState({
        x:50,
        y:70
    })
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }
    const RangeValue = (e) =>{
   console.log(e)
    }
useEffect(()=>{
    const cropBorder= document.getElementsByClassName('.reactEasyCrop_CropArea')
   
},[])
    return (
        <>
            <div className='loader_modal_wrapper'></div>
            <div className='crop_image_modal_div'>
                <h1>Modify Your Image</h1>
                <div  className='crop_div'>
                    
                    <Cropper
                        
                        image={img}
                        crop={crop}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        
                    />
                </div>

                <input defaultValue={50} onChange={RangeValue}  type='range'/>
            </div>
        </>
    )
}

export default CropImageModal