import React, { useState } from 'react'
import './Partner.css'
import PartnerPhone from '../../Components/PartnerPhone'
import PartnerLogos from './PartnerLogos'
import AddLogoModal from './AddLogoModal'
import PartnerSearchModal from './PartnerSearchModal'
import { useNavigate } from 'react-router-dom'
const Partner = () => {
    const [search, setSearch] = useState(false);
    const [logoModal,setLogoModal]=useState(false);
    const navigate = useNavigate()
   
    return (
        <>
            {search && <PartnerSearchModal setSearch={setSearch} />}
            {logoModal && <AddLogoModal logoModal={logoModal} setLogoModal={setLogoModal}/>}
            <div style={{
                paddingBottom: '30px'
            }}>
                <div className='universal_container'>
                    <div className='partner_wrapper'>
                        <div className='center_layout' >
                            <div className='partner_logos_wrapper'>
                                <h3>Partner Logos</h3>
                                <div className='partner_logos_button_wrapper'>
                                    <button onClick={(()=>setLogoModal(true))}>+Add Logo</button>
                                    <button onClick={(() => setSearch(true))}><i class="fa-solid fa-magnifying-glass"></i> Search.......</button>
                                    <button onClick={(()=>navigate('/library-logos'))}>+Choose From My Library</button>
                                </div>
                            </div>

                            <PartnerLogos />
                        </div>
                        <PartnerPhone />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner