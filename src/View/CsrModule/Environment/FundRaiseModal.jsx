import React from 'react'
import ModalButton from '../../../Components/ModalButton'
import img from '../../../assets/image (47).png'
const FundRaiseModal = ({ setModal, volunteer }) => {
    return (
        <>
            <div className='fund_raise_modal_wrapper' onClick={(() => setModal(false))}></div>
            <div className='fund_raise_modal'>
                <img src={img} style={{
                    width: "100px",
                    top: '-40px',
                    left: '10px',
                    position: 'absolute'
                }} />
                {volunteer ? <h1>Volunteer</h1> : <h1>Fund Raise</h1>}
                <div className='fund_raise_input_Wrapper'>
                    {!volunteer && <div className='fund_raise_input_div'>
                        <label>Fund raise Amount</label>
                        <input placeholder='Enter Amount' />
                    </div>}


                    {volunteer && <div className='fund_raise_input_div'>
                        <label>Total Member</label>
                        <input placeholder='100' />
                    </div>}

                    {!volunteer && <div className='fund_raise_input_div'>
                        <label>Currency</label>
                        <select>
                            <option>USD</option>
                        </select>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>}

                    {volunteer && <div className='fund_raise_input_div'>
                        <label>Language</label>
                        <select>
                            <option>English</option>
                        </select>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>}
                </div>
                <div style={{
                    width: '170px',
                    marginInline: 'auto'
                }}>
                    <ModalButton name="Submit" />
                </div>
            </div>
        </>
    )
}

export default FundRaiseModal