import React from 'react'
import Header from './Header/Header'
import {Outlet, useLocation} from 'react-router-dom'
const MainLayout = () => {
  const WelcomeRoutes = ['/welcome','/userUrl'];
  const SplashRoutes = ['/splashscreen'];
  const PartnerRoutes = ['/partner']
  const location = useLocation()
  return (
    <>
        <Header partner={PartnerRoutes.includes(location.pathname) && true} splash={SplashRoutes.includes(location.pathname) && true} welcome={WelcomeRoutes.includes(location.pathname) && true}/>
        <Outlet/>
    </>
  )
}

export default MainLayout