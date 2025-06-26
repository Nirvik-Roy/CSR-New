import React, { useState } from 'react'
import ModalButton from '../../../Components/ModalButton'
import RegisterButton from '../../../Components/RegisterButton'
import FundRaiseModal from './FundRaiseModal'

const SupportRequired = () => {
    const [modal, setModal] = useState(false)
    const [toggle, setToggle] = useState({
        volunteer: false,
        fundRaiser: false,
        both: false
    })
    const ToggleFunc = (i) => {
        setToggle({
            volunteer: i == 1 ? true : false,
            fundRaiser: i == 2 ? true : false,
            both: i == 3 ? true : false,
        })
    }

    return (
        <>
            {modal && <FundRaiseModal setModal={setModal} volunteer = {toggle.volunteer && true}  />}
            <div className='createProject_div'>
                <h3>Support Required</h3>
                <div className='support_required_radio'>
                    <div className='support_1'>
                        <input onClick={(() => ToggleFunc(1))} checked={toggle.volunteer && true} type='radio' />
                        <p>Volunteer</p>
                    </div>

                    <div className='support_1'>
                        <input onClick={(() => ToggleFunc(2))} checked={toggle.fundRaiser && true} type='radio' />
                        <p>Fund raiser</p>
                    </div>

                    <div className='support_1'>
                        <input onClick={(() => ToggleFunc(3))} checked={toggle.both && true} type='radio' />
                        <p>Both</p>
                    </div>
                </div>

                <div onClick={(()=>setModal(true))} style={{
                    width: '170px',
                    marginLeft: 'auto'
                }}>
                    <RegisterButton name="View Details" />
                </div>
            </div>
        </>
    )
}

export default SupportRequired