import './App.css'
import Login from './View/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './View/Login/Register'
import Otp from './View/Login/Otp'
import MainLayout from './Layout/MainLayout'
import Welcome from './View/Welcome/Welcome'
import ElserUserUrl from './View/Welcome/ElseUserUrl/ElserUserUrl'
import SplashScreen from './View/Welcome/SplashScreen/SplashScreen'
import Partner from './View/Partner/Partner'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect  } from 'react'
import { darkTheme, lightTheme } from './Stores/Slices/ThemeSlices';
import LibraryLogos from './View/Partner/LibraryLogos'
import CsrModule from './View/CsrModule/CsrModule'
import Environment from './View/CsrModule/Environment/Environment'
import ModuleHighlight from './View/CsrModule/ModuleHighlight/ModuleHighlight'
import BookingDetails from './View/CsrModule/BookingDetails/BookingDetails'
import HotelBooking from './View/CsrModule/HotelBooking/HotelBooking'
function App() {
   const darkMode = useSelector((state) => state.theme);
   const dispatch = useDispatch()
   const Dark = {
      '--body-color':'#000',
      '--box-white':'#262931',
      '--black':'#fff',
      '--header-bg':'#262931',
      '--grey':'#fff',
      '--sidebar-bg':'#000000b8',
     }

     const Light = { 
        '--primary-color':'#7C59CA',
        '--secondary-color':'#9D81E0',
        '--linear-color':' #AF91F5,#9D81E0',
        '--black':'#000',
        '--body-color':'#f2effa',
        '--sidebar-bg':'#7c5acbb8',
        '--white':'#fff',
        '--whitegrey':'#F2F2F2',
        '--grey':'#545454',
        '--para-color':'#303968',
        '--header-bg':'#f2effa',
        '--box-white':'#fff',
       }

       const ChangeDarkThemeFunc = () =>{
         Object.entries(Dark).forEach((e)=>
           root.style.setProperty(e[0], e[1])
         )
         document.body.style.backgroundColor = '#000000';
         localStorage.setItem('dark',true);
         dispatch(darkTheme())
        }

        const ChangeLightThemeFunc = () =>{
        Object.entries(Light).forEach((e)=>
         root.style.setProperty(e[0],e[1])
       )
       document.body.style.backgroundColor = '#f2effa';
       localStorage.removeItem('dark')
       Object.entries(Dark).forEach((e)=>
         root.style.removeProperty(e[0],e[1])
       )
       dispatch(lightTheme())
       }
    
       useEffect(()=>{
         if(localStorage.getItem('dark')){
           ChangeDarkThemeFunc()
      
         }else{
           ChangeLightThemeFunc()
         }
       },[darkMode])

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={ <Register /> } />
               <Route path='/login' element={<Login />} />
               <Route path='/otp' element={<Otp />} />
               <Route element={<MainLayout />}>
                  <Route path='/welcome' element={<Welcome />} />
                  <Route path='/userUrl' element={<ElserUserUrl />} />
                  <Route path='/splashscreen' element={<SplashScreen />} />
                  <Route path='/partner' element={<Partner/>}/>
                  <Route path='/library-logos' element={<LibraryLogos/>}/>
                  <Route path='/csr-module' element={<CsrModule/>}/>
                  <Route path='/environment' element={<Environment/>}/>
                  <Route path='/module-highlight' element={<ModuleHighlight/>}/>
                  <Route path='/booking-details' element={<BookingDetails/>}/>
                  <Route path='/hotel-booking' element={<HotelBooking/>}/>
               </Route>
            </Routes>
         </BrowserRouter>

      </>
   )
}

export default App
