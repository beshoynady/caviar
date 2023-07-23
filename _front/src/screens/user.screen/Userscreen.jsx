import React from 'react'
import Header from './component/header/Header'
import Home from './component/home/Home.jsx';
import Offers from './component/offers/Offers.jsx';
import Menu from './component/menu/Menu.jsx';
import Location from './component/location/Location.jsx';
import Contact from './component/contact/Contact.jsx';
import Footer from './component/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';




const Userscreen = () => {
    return (
        <div className='userscreen'>
            <Header />
            <Home />
            <Offers />
            <Menu />
            <Location />
            <Contact />
            {/* <Outlet></Outlet> */}
            <Footer />
        </div>
    )
}

export default Userscreen