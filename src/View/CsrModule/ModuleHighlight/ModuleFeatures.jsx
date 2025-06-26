import React from 'react'
import ModalButton from '../../../Components/ModalButton.jsx'
import booking from '../../../assets/booking 1.png'
import booking2 from '../../../assets/booking 2.png'
import plus from '../../../assets/image (5).png'
import {useNavigate} from 'react-router-dom'
const ModuleFeatures = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className='module_features_wrapper'>
            <div className='feature_module_head_Wrapper'>
                <h1>SELECT four Feature Modules</h1>
                <div onClick={(()=>navigate('/booking-details'))} style={{
                    width:'150px'
                }}>
                <ModalButton name='Submit'/>
                </div>
         
            </div>
            <div className='module_features_card_wrapper'>
                <div className='module_feature_card_1'>
                    <img src={booking}/>
                    <h4>Bookings</h4>
                </div>

                <div className='module_feature_card_1'>
                    <img src={booking2}/>
                    <h4>Forest</h4>
                </div>

                <div className='module_feature_card_1'>
                    <img src={plus}/>
                    <h4>Sample</h4>
                </div>

                <div className='module_feature_card_1'>
                    <img src={plus}/>
                    <h4>Sample</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModuleFeatures