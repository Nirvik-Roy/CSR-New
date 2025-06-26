import React, { useState } from 'react'
import Button from '../../../Components/Button'
import img from '../../../assets/image (54).png'
import img2 from '../../../assets/image (55).png'
import img3 from '../../../assets/image (56).png'
import img4 from '../../../assets/image (57).png'
import medal from '../../../assets/image 18.png'
import RegisterButton from '../../../Components/RegisterButton'
import plus from '../../../assets/Vector (4).png'
import BackButton from '../../../Components/BackButton'
import PartnerSearchModal from '../../Partner/PartnerSearchModal.jsx'
const AssociatePartners = () => {
    const [search, setSearch] = useState(false)
    return (
        <>
            {search && <PartnerSearchModal search={search} setSearch={setSearch} environment={true} />}
            <div className='createProject_div'>
                <div className='associate_partner_head_wrapper'>
                    <div>
                        <h1>Associated Partners</h1>
                        <p>Upload logo can add upto four logo</p>
                    </div>

                    <div onClick={(() => setSearch(true))}>
                        <Button environment={true} name='Search for more partners' />
                    </div>
                </div>

                <div className='partner_logos_wrapper_div' style={{
                    marginTop: '30px'
                }}>
                    {[img, img2, img3, img4, img4, img4,].map((e, i) => {
                        return (
                            <>
                                <div key={i} className='partner_logo_main'>
                                    <div className='partner_logo1'>
                                        <img className='partner_logo_img' src={e} />
                                        <img style={{
                                            width: '45px',
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px'
                                        }} src={medal} />




                                    </div>
                                    <p>Company Logo</p>
                                </div>
                            </>
                        )
                    })}

                </div>
                <div style={{
                    width: '170px',
                    marginInline: 'auto',
                    marginTop: '40px'
                }}>
                    <RegisterButton name='Submit' />
                </div>


            </div>
        </>
    )
}

export default AssociatePartners