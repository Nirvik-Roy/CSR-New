import React from 'react'
import Header from './Header/Header'
import {Outlet, useLocation} from 'react-router-dom'
const MainLayout = () => {
  const WelcomeRoutes = ['/welcome','/welcome/userUrl'];
  const SplashRoutes = ['/welcome/splashscreen']
  const location = useLocation()
  return (
    <>
        <Header splash={SplashRoutes.includes(location.pathname) && true} welcome={WelcomeRoutes.includes(location.pathname) && true}/>
        <Outlet/>
    </>
  )
}

export default MainLayout