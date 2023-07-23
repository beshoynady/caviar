import React from 'react';
import './ManagLayout.css'
// const Outlet = require('react-router-dom')
// const NavBar = require('./manag.component/navbar/NavBar')
// const SideBar = require('./manag.component/sidebar/SideBar')

import { Outlet } from 'react-router-dom';
import NavBar from './manag.component/navbar/NavBar';
import SideBar from './manag.component/sidebar/SideBar';

const ManagLayout = ()=>{
  return (
    <div className='dashboard'>
        <NavBar/>
        <main className='manag_main'>
            <SideBar/>
            <Outlet></Outlet>
        </main>
    </div>
  )
}

export default ManagLayout