import './App.css'
import Login from './View/Login/Login'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
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
<Route path='/' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/otp' element={<Otp/>}/>
<Route element={<MainLayout/>}>
   <Route path='/welcome' element={<Welcome/>}/>
   <Route path='/welcome/userUrl' element={<ElserUserUrl/>}/>
   <Route path='/welcome/splashscreen' element={<SplashScreen/>}/>
</Route>
</Routes>
   </BrowserRouter>

   </>
  )
}

export default App
