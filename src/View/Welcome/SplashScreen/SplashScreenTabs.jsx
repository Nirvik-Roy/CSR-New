import React from 'react'
import GalleryImage from './GalleryImage'

const SplashScreenTabs = () => {
  return (
    <>
    <div className='splashscreen_tabs_wrapper'>
    <div style={{
        padding:'15px',
        background:'#fff',
        zIndex:'9',
        borderRadius:'8px 8px 0px 0px ',
        border:'1px solid var(--primary-color)',
        borderBottom:'none'
    }}>
    <div className='splashscreen_tab'>Choose from Library</div>
    </div>
    <div style={{
        padding:'15px',
        background:'#fff',
        zIndex:'9',
        borderRadius:'8px 8px 0px 0px ',
        border:'1px solid var(--primary-color)',
        borderBottom:'none'
    }}>
    <div className='splashscreen_tab'>Upload Your Own</div>
    </div>
    <div style={{
        padding:'15px',
        background:'#fff',
        zIndex:'9',
        borderRadius:'8px 8px 0px 0px ',
        border:'1px solid var(--primary-color)',
        borderBottom:'none'
    }}>
     <div className='splashscreen_tab'>Generate With AI</div>
    </div>
   
    </div>
        <div className='splashscreen_tabs'>
            <GalleryImage/>
        </div>
    </>
  )
}

export default SplashScreenTabs