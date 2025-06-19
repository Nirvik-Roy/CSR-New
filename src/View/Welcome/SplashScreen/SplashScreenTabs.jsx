import React from 'react'
import GalleryImage from './GalleryImage'
import RegisterButton from '../../../Components/RegisterButton'
import BackButton from '../../../Components/BackButton'
import UploadImage from './UploadImage'
import AiTextEditor from './AiTextEditor'

const SplashScreenTabs = () => {
    return (
        <>
            <div className='splashscreen_tabs_wrapper'>
                <div className='tabs_background' >
                    <div className='splashscreen_tab'>Choose from Library</div>
                </div>

                <div>
                    <div className='splashscreen_tab'>Upload Your Own</div>
                </div>

                <div>
                    <div className='splashscreen_tab'>Generate With AI</div>
                </div>



            </div>
            <div className='splashscreen_tabs'>
                {/* <GalleryImage /> */}
                {/* <UploadImage/> */}
                <AiTextEditor/>
                
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