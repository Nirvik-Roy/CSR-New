import React from 'react'
import ModalButton from '../../Components/ModalButton'
import PillarCards from './PillarCards'

const CsrPillars = () => {
  return (
    <>
        <div className='csr_pillar_wrappper'>
            <div className='csr_pillar_header_wrapper'>
                <h2>SELECT 5 CSR PILLARS</h2>
                <div style={
                    {
                        width:'150px'
                    }
                }>
                <ModalButton name={'Submit'}/>
                </div>
                
            </div>
            <PillarCards/>
        </div>
    </>
  )
}

export default CsrPillars