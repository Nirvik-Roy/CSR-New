import React from 'react'
import ModalButton from '../../../Components/ModalButton'
import RegisterButton from '../../../Components/RegisterButton'

const SupportRequired = () => {
  return (
    <>
        <div className='createProject_div'>
            <h3>Support Required</h3>
            <div className='support_required_radio'>
                <div className='support_1'>
                    <input type='radio'/>
                    <p>Volunteer</p>
                </div>

                <div className='support_1'>
                    <input type='radio'/>
                    <p>Fund raiser</p>
                </div>

                <div className='support_1'>
                    <input type='radio'/>
                    <p>Both</p>
                </div>
            </div>

            <div style={{
                width:'170px',
                marginLeft:'auto'
            }}>
                <RegisterButton name="View Details"/>
            </div>
        </div>
    </>
  )
}

export default SupportRequired