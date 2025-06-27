import React from 'react'
import ModalButton from '../../../Components/ModalButton'
import img from '../../../assets/image (6).png'
import img2 from '../../../assets/image (7).png'
import img3 from '../../../assets/image (8).png'
import img4 from '../../../assets/image (9).png'
const CsrHospitality = () => {
  return (
    <>
        <div className='csr_hospital_wrapper'>
            <div className='csr_hospital_hed_Wrapper'>
                <h1>CSR Hospitality and Travel</h1>
                <div style={{
                    width:"130px"
                }}>
                <ModalButton name='Submit'/>
                </div>
               
            </div>
            <div className='csr_hospital_cards_wrapper'>
            {[img,img2,img3,img4].map((e,i)=>{
                return(
                    <>
                    <div key={i} className='csr_hospital_card'>
                    <img src={e}/>
                    { i == 0 && <p>Hotels</p>}
                    { i == 1 && <p>HomeStay</p>}
                    { i == 2 && <p>Lodges</p>}
                    { i == 3 && <p>Packages</p>}
                </div>
                    </>
                )
            })}
               
            </div>
        </div>
    </>
  )
}

export default CsrHospitality