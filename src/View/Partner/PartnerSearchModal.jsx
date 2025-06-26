import img from '../../assets/image (54).png'
import img2 from '../../assets/image (55).png'
import img3 from '../../assets/image (56).png'
import img4 from '../../assets/image (57).png'
import medal from '../../assets/image 18.png'
import RegisterButton from '../../Components/RegisterButton'
import ModalButton from '../../Components/ModalButton'
import plus from '../../assets/Vector (4).png'

 const PartnerSearchModal = ({setSearch,environment}) => {
    return (
        <>
            <div className='search_logo_modal_wrappper' onClick={(() => { setSearch(false) })}></div>
            <div className='search_logo_modal'>
                <div className='search_logo_input_div'>
                    <input placeholder='Search...' defaultValue={environment ? 'Sample Partner Company Name':'Birds'} />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='partner_logos_wrapper_div' style={{
                    marginTop: '40px',
                    marginBottom: '40px'
                }}>
                    {[img, img2, img3, img4, img4, img4,].map((e, i) => {
                        return (
                            <>
                                <div key={i} className='partner_logo_main'>
                                    <div className='partner_logo1 modal_partner_logo'>
                                        <img className='partner_logo_img' src={e} />
                                        <img style={{
                                            width: '45px',
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px'
                                        }} src={medal} />

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            fontSize: '17px',
                                            color: 'var(--primary-color)',
                                            columnGap: '8px',
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            cursor: 'pointer'
                                        }}>
                                           {environment ? <img style={{
                                            position:'absolute',
                                            top:'0px',
                                            right:'0px',
                                            width:'20px'
                                           }} src={plus}/> : <i class="fa-regular fa-circle-xmark"></i>}

                                        </div>
                                    </div>
                                    <p>Company Logo</p>
                                </div>
                            </>
                        )
                    })}
                </div>

                <div onClick={(() => { setSearch(false) })} style={{
                    width: '200px',
                    marginInline: 'auto'
                }}>
                    <ModalButton name="Submit" />
                </div>
            </div>
        </>
    )
}

export default PartnerSearchModal