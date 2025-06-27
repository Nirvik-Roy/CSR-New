import React from 'react'
import Header from './Header/Header'
import {Outlet, useLocation} from 'react-router-dom'
const MainLayout = () => {
  const WelcomeRoutes = ['/welcome','/userUrl'];
  const SplashRoutes = ['/splashscreen'];
  const PartnerRoutes = ['/partner','/library-logos'];
  const CsrModuleRoutes =['/csr-module'];
  const EnvironmentRoutes = ['/environment',];
  const ModuleHighlightRoutes = ['/module-highlight'];
  const BookingDetailsRoutes = ['/booking-details'];
  const HotelBookingRoutes = ['/hotel-booking'];
  const location = useLocation()
  return (
    <>
        <Header hotelbooking={HotelBookingRoutes.includes(location.pathname) && true} bookingdetails={BookingDetailsRoutes.includes(location.pathname) && true} moduleHighlight={ModuleHighlightRoutes.includes(location.pathname) && true} environment = {EnvironmentRoutes.includes(location.pathname) && true} module={CsrModuleRoutes.includes(location.pathname) && true} partner={PartnerRoutes.includes(location.pathname) && true} splash={SplashRoutes.includes(location.pathname) && true} welcome={WelcomeRoutes.includes(location.pathname) && true}/>
        <Outlet/>
    </>
  )
}

export default MainLayout