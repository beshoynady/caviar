import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <header className='manag-header bg-#854d0e'>
      <div className='container'>
        <div className='manag-logo'>
          <h1 className='bg-#854d0e'>caviar</h1>
        </div>
        <nav className='nav-manag'>
          <ul className='nav-list'>
            <li>الاسم</li>
            <li>الاشعارات</li>
            <li>العدادات</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar