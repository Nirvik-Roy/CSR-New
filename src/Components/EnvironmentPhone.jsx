import React from 'react'
import donationBanner from '../assets/donationenvironment.png'
import './EnvironmentPhone.css'
import img from '../assets/download.jpeg'
import donarimg from '../assets/download (1).jpeg'
import lake from '../assets/images.jpeg'
const EnvironmentPhone = () => {
  return (
    <>
      <div className='phone_div' style={{
        background: 'white',
        position: 'fixed'
      }}>
        <div className='phone_head_wrapper' style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          columnGap: '20px'
        }}>
          <p style={{
            fontSize: '13px',
            fontWeight: '600'
          }}>19:27</p>
          <div className='phone_head'></div>
          <div style={{
            fontSize: '12px',
            display: 'flex',
            columnGap: '4px'

          }}>
            <i class="fa-solid fa-signal"></i>
            <i class="fa-solid fa-wifi"></i>
            <i class="fa-solid fa-battery-full"></i>
          </div>
        </div>
        <div className='environment_Phone_content_wrapper'>
          <div className='environment_phone_content_head'>
            <i class="fa-solid fa-arrow-left"></i>
            <p>Environment</p>
          </div>
          <div className='donation_banner_img'>
            <img src={donationBanner}/>
          </div>

          <h3 className='lorem_head'>Lorem Ipsum Simply</h3>


           <div className='environment_project_cards_Wrapper'>
         {[img,lake].map((e,i)=>{
          return(
            <>
            <div className='environment_project'>
              <div className='environment_project_img'>
                <img src={e}/>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit vol</p>
              <span>$ 9,80,765 raised</span>
              <div className='environment_range_outside'>
                <div className='environment_range_inside'></div>
              </div>
              <small>last donation 2 hr ago</small>

              <div className='donars_wrapper_container'>
                <div className='donars_wrapper'>
                  <img style={{
                    width:'15px',
                    height:'15px',
                    borderRadius:'50%'
                  }} src={donarimg}/>
                      <img style={{
                    width:'15px',
                    height:'15px',
                    borderRadius:'50%'
                  }} src={donarimg}/>
                      <img style={{
                    width:'15px',
                    height:'15px',
                    borderRadius:'50%'
                  }} src={donarimg}/>
                  <small style={{
                    display:'inline-block',
                    transform:'translateX(-10px)',
                    color:'grey',
                    fontWeight:'500',
                    fontSize:'10px'

                  }}>25,625 Donors</small>
                </div>

                 <button>Donate</button>
              </div>
            </div>
            </>
          )
         })}

           </div>


           <h3 className='lorem_head'>Lorem Ipsum Simply</h3>
           <div className='environment_project_cards_Wrapper'>
         {[img,lake].map((e,i)=>{
          return(
            <>
            <div className='environment_project'>
              <div className='environment_project_img'>
                <img src={e}/>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus error sit vol</p>
              <span>$ 9,80,765 raised</span>
              <div className='environment_range_outside'>
                <div className='environment_range_inside'></div>
              </div>
              <small>last donation 2 hr ago</small>

              <div className='donars_wrapper_container'>
                <div className='donars_wrapper'>
                  <img style={{
                    width:'15px',
                    height:'15px',
                    borderRadius:'50%'
                  }} src={donarimg}/>
                      <img style={{
                    width:'15px',
                    height:'15px',
                    borderRadius:'50%'
                  }} src={donarimg}/>
                      <img style={{
                    width:'15px',
                    height:'15px',
                    borderRadius:'50%'
                  }} src={donarimg}/>
                  <small style={{
                    display:'inline-block',
                    transform:'translateX(-10px)',
                    color:'grey',
                    fontWeight:'500',
                    fontSize:'10px'

                  }}>25,625 Donors</small>
                </div>

                 <button>Donate</button>
              </div>
            </div>
            </>
          )
         })}

           </div>


        </div>
      </div>
    </>
  )
}

export default EnvironmentPhone