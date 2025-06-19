import './App.css'
import Login from './View/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './View/Login/Register'
import Otp from './View/Login/Otp'
import MainLayout from './Layout/MainLayout'
import Welcome from './View/Welcome/Welcome'
import ElserUserUrl from './View/Welcome/ElseUserUrl/ElserUserUrl'
import SplashScreen from './View/Welcome/SplashScreen/SplashScreen'
function App() {

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/otp' element={<Otp />} />
               <Route path='welcome' element={<MainLayout />}>
                  <Route index  element={<Welcome />} />
                  <Route path='userUrl' element={<ElserUserUrl />} />
                  <Route path='splashscreen' element={<SplashScreen />} />
               </Route>
            </Routes>
         </BrowserRouter>

      </>
   )
}

export default App
