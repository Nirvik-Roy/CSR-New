import React from 'react'
import './CsrModule.css'
import PartnerPhone from '../../Components/PartnerPhone'
import CsrPillars from './CsrPillars'
const CsrModule = () => {
  return (
    <>
        <div className='csr_module_wrapper'>
            <div className='universal_container'>
                <div className='csr_module_content_wrapper'>
                    <div className='center_layout'>
                       <CsrPillars/>
                    </div>
                    <PartnerPhone/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CsrModule