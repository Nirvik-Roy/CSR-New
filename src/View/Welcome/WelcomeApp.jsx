import React from 'react'

const WelcomeApp = () => {
    return (
        <>
            <div className='welcome_left_qr_Wrapper'>
                <h3>App Name</h3>
                <div className='app_name_input_div'>
                    <input type='text' placeholder='Enter Your app name' />
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </>
    )
}

export default WelcomeApp