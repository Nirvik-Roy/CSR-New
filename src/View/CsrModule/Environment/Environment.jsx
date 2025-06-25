import React from 'react'
import EnvironmentPhone from '../../../Components/EnvironmentPhone'
import './Environment.css'
import CreateProject from './CreateProject'
import ProjectItinerary from './ProjectItinerary'
import ProjectObjective from './ProjectObjective'
import SupportRequired from './SupportRequired'
import AssociatePartners from './AssociatePartners'
import BackButton from '../../../Components/BackButton'
import RegisterButton from '../../../Components/RegisterButton'
const Environment = () => {
    return (
        <>
            <div className='environment_wrapper'>
                <div className='universal_container'>
                    <div className='environment_content_wrapper'>
                        <div className='center_layout'>
                            <h2>Please fill in below</h2>

                            <CreateProject />
                            <ProjectItinerary />
                            <ProjectObjective />
                            <SupportRequired />
                            <AssociatePartners />
                        </div>
                        <EnvironmentPhone />
                    </div>
                    <div className='center_layout' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '20px'
                    }}>
                        <div style={{
                            width: '170px'
                        }}>
                            <BackButton name='Back' />
                        </div>

                        <div style={{
                            width: '170px'
                        }}>
                            <RegisterButton name='Save' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Environment