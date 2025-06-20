import React, { useEffect, useState } from 'react'
import GalleryImage from './GalleryImage'
import RegisterButton from '../../../Components/RegisterButton'
import BackButton from '../../../Components/BackButton'
import UploadImage from './UploadImage'
import AiTextEditor from './AiTextEditor'

const SplashScreenTabs = () => {

   const [index,setIndex]=useState(0);
   const [toggle,setToggle] =useState({
    toggle1:false,
    toggle2:false,
    toggle3:false,
   })

   useEffect(()=>{
    setToggle({
        toggle1:index===0 ? true : false,
        toggle2:index=== 1 ? true : false,
        toggle3:index === 2 ? true :false,
    })
   },[index])

    return (
        <>
            <div className='splashscreen_tabs_wrapper'>
                {['Choose from Library', 'Upload Your Own', 'Generate With AI'].map((e, i) => {
                    return (
                        <>
                            <div key={i} className={ i === index ? 'tabs_background' :'tabs_background_padding'} >
                                <div onClick={(()=>{
                            
                                    setIndex(i)
                                })}
                                 style={i==index ?  {
                                    background:'var(--primary-color)',
                                    color:'white',
                                    transition:'0.3s linear all'
                                 }:{

                                 }}
                                  className='splashscreen_tab'>{e}</div>
                            </div>
                        </>
                    )
                })}






            </div>
            <div className='splashscreen_tabs'>
              {toggle.toggle1 && <GalleryImage />}
           { toggle.toggle2 && <UploadImage/>}
                { toggle.toggle3 && <AiTextEditor />}

            </div>

            <div className='countiune_back_wrapper' style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>


                <div style={{
                    width: '150px'
                }}>
                    <BackButton name="Back"></BackButton>
                </div>
                <div style={{
                    width: '150px'
                }}>
                    <RegisterButton name={'Continue'}></RegisterButton>
                </div>
            </div>
        </>
    )
}

export default SplashScreenTabs