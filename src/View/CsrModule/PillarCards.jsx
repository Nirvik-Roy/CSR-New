import React from 'react'
import img from '../../assets/image (59).png'
import img2 from '../../assets/image.png'
import img3 from '../../assets/image (1).png'
import img4 from '../../assets/image (2).png'
import img5 from '../../assets/image (3).png'
import img6 from '../../assets/image (4).png'
import { useNavigate } from 'react-router-dom'
const PillarCards = () => {
    const navigate  = useNavigate()
  return (
    <>
        <div className='csr_pillars_cards_wrapper'>
        {[img,img2,img3,img4,img5,img6].map((e,i)=>{
            return(
                <>
                <div onClick={(()=>i===3 ? navigate('/environment'):'')}  className='pillar_card' style={{
                    display:'flex',
                    justifyContent:'end',
                    
                    flexDirection:'column'
                }}>
                    <img src={e}/>
                    <h3>{i== 0 ? 'Workplace' : i === 1 ? 'Community' : i===2? 'Philanthropy':i===3 ? 'Environment' : i===4? 'Wildlife' : i === 5 ? 'Health' :''}</h3>
                </div>
                </>
            )
        })}
          
        </div>
    </>
  )
}

export default PillarCards