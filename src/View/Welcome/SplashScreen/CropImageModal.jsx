import React, { useEffect, useState } from 'react'
import img from '../../../assets/image (50).png'
import Cropper from 'react-easy-crop'
import cropimg from '../../../assets/crop 1.png'
import angeldown from '../../../assets/material-symbols_arrow-drop-down-rounded.png'
import smallimg from '../../../assets/solar_gallery-bold.png'
import bigimg from '../../../assets/solar_gallery-bold (1).png'
const CropImageModal = ({setmodalToggle}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1);
    const [range, setrange] = useState({
        x: 50,
        y: 70
    })
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }
    const RangeValue = (e) => {
        console.log(e)
    }
    useEffect(() => {
        const cropBorder = document.getElementsByClassName('.reactEasyCrop_CropArea')

    }, [])
    return (
        <>
            <div className='loader_modal_wrapper' onClick={(()=>{
                setmodalToggle({
                    toggle1:false,
                    toggle2:false
                })
            })}></div>
            <div className='crop_image_modal_div'>
                <h1>Modify Your Image</h1>
                <div className='crop_div'>
                    <Cropper
                        image={img}
                        crop={crop}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        
                    />
                </div>
                <div className='select_size_range_wrapper'>
                    <div className='select_size_wrapper'>
                        <p>Select Size:</p>
                        <div className='iphone_wrapper'>
                            <h6>Iphone 14 Plus <span>
                                <img src={angeldown} />
                            </span></h6>
                            <small>428 x 926</small>

                        </div>
                    </div>
                    <div className='select_image_range_wrapper'>
                        <img style={{
                            width: '12px'
                        }} src={smallimg} />
                        <input type='range' />
                        <img style={{
                            width: '20px'
                        }} src={bigimg} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default CropImageModal