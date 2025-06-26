import React from 'react'
import ModulePhone from '../../../Components/ModulePhone/ModulePhone'
import './ModuleHighlight.css'
import ModuleFeatures from './ModuleFeatures'
const ModuleHighlight = () => {
  return (
    <>
        <div className='module_hightlight_wrapper'>
            <div className='universal_container'>
            <p style={{
                color:'var(--black)'
            }}>Click on each module and showcase your projects, initiatives and plans.</p>
                <div className='module_highlight_content_wrapper'>
                    <div className='center_layout'>
                        <ModuleFeatures/>
                    </div>
                    <ModulePhone/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModuleHighlight