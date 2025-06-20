import React, { useEffect, useState } from 'react'
import RegisterButton from '../../Components/RegisterButton'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { darkTheme, lightTheme } from '../../Stores/Slices/ThemeSlices';
const WelcomeThemeChoose = () => {
   const root = document.documentElement;
   const location = useLocation()
   const darkMode =  useSelector((state) => state.theme.dark);
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const Dark = {
    '--body-color':'#000',
    '--box-white':'#262931',
    '--black':'#fff',
    '--header-bg':'#262931',
    '--grey':'#fff',
    '--sidebar-bg':'#000000b8',
   }

   const Light = { 
  '  --primary-color':'#7C59CA',
    '--secondary-color':'#9D81E0',
    '--linear-color':' #AF91F5,#9D81E0',
    '--black':'#000',
   ' --body-color':'#f2effa',
    '--sidebar-bg':'#7c5acbb8',
   ' --white':'#fff',
   ' --whitegrey':'#F2F2F2',
    '--grey':'#545454',
    '--para-color':'#303968',
    '--header-bg':'#f2effa',
    '--box-white':'#fff',
   }
   const [theme,setTheme]=useState({
    darktheme:false,
    lighttheme:true,
   })

   const ChangeDarkThemeFunc = () =>{
    Object.entries(Dark).forEach((e)=>
      root.style.setProperty(e[0], e[1])
    )
    localStorage.setItem('dark',true);
    setTheme({
      darktheme:true,
      lighttheme:false
    })

    dispatch(darkTheme)
   }
   const ChangeLightThemeFunc = () =>{
   Object.entries(Light).forEach((e)=>
    root.style.setProperty(e[0],e[1])
  )
  localStorage.removeItem('dark')
  setTheme({
    darktheme:false,
    lighttheme:true
  })
  Object.entries(Dark).forEach((e)=>
    root.style.removeProperty(e[0],e[1])
  )
  dispatch(lightTheme)
  }
useEffect(()=>{
  if(localStorage.getItem('dark')){
    ChangeDarkThemeFunc()
  }else{
    ChangeLightThemeFunc()
  }
},[])

  return (
    <>
         <div className='welcome_left_qr_Wrapper'>
                  <h3>Edit App Colors & Mode </h3>

                  <div className='primary_secondary_color_wrapper'>
                    <div className='primary_color_input_div'>
                      <label>Primary Color</label>
                      <input placeholder='6bb64a' />
                    </div>
                    <div className='primary_color_input_div'>
                    <label>Secondary Color</label>
                    <input placeholder='1d4354' />
                    </div>
                  </div>

                  <div className='light_mode_dark_mode_Wrapper'>
                    <div className='choose_mode_wrapper'>
                      <h2>Choose Which Mode You Would like</h2>

                      <div className='theme_mode_options'>
                        <div className='light_theme_option_wrapper'>
                          <input
                             checked={theme.lighttheme}
                            onClick={ChangeLightThemeFunc} type='radio'/>
                          <p>Light Mode</p>
                        </div>


                        <div className='light_theme_option_wrapper'>
                          <input
                           checked={theme.darktheme}
                            onClick={ChangeDarkThemeFunc}  type='radio'/>
                          <p>Dark Mode</p>
                        </div>


                      </div>

                      
                    </div>
                    <div onClick={(()=>navigate('/splashscreen'))} style={{
                      width:'150px'
                    }}>
                    <RegisterButton name='Continue'/>
                    </div>
                 
                  </div>
                </div>
    </>
  )
}

export default WelcomeThemeChoose