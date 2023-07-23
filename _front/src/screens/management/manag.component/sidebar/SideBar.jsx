import React from 'react';
import './SideBar.css';
import icon from '../../../image/icon/dashboard.svg';
import {Link} from 'react-router-dom'

const SideBar = () => {
  const menuitem = [
    {title : 'dashboard', icon : icon},
    {title : 'orders', icon : icon},
    {title : 'products', icon : icon},
    {title : 'tables', icon : icon},
    {title : 'employees', icon : icon},
    {title : 'category', icon : icon},
  ]
  return (
    <div className='sidebar'>
        <div className='menu'>
          {
            menuitem.map((item, i) =>{
              return(
                <Link to={item.title!= 'dashboard'?item.title:''} className='item' key={i}>
                  <img src={item.icon} alt="icon" className="icon-manag" />
                  <p>{item.title}</p>
                </Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default SideBar