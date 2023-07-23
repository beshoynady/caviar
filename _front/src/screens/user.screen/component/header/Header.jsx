import React, {useRef,useState} from 'react'
import clock from '../../../image/clock_white_24dp.svg'
import cartIcon from '../../../image/shopping_cart_black_24dp.svg'

import './Header.css'
import Cart from '../cart/Cart'
import { Link } from 'react-router-dom'


const Header = () => {
  const [opencart, setopencart] = useState(false)
  const navref = useRef()

  const openmobmenu = ()=> {
    navref.current.classList.toggle(
			"show");
  }
  return (
    <header className='header-client'>
      <div className="container">
        <div className='logo'>
          <a href="#">CAVIAR</a>
        </div>
        <nav ref={navref}>
          <ul className='navigator'>
            <li onClick={()=>{openmobmenu()}}><Link to="">Home </Link></li>
            <li onClick={()=>{openmobmenu()}}><Link to="menu">Menu</Link></li>
            <li onClick={()=>{openmobmenu()}}><Link to="offer">offers</Link></li>
            <li onClick={()=>{openmobmenu()}}><Link to="location">Location</Link></li>
            <li onClick={()=>{openmobmenu()}}><Link to="contact">contact Us</Link></li>
          </ul>
          <div className='time'>
            <img src={clock} alt="time" />
            <div className='detalis'>
              <span>opening time</span>
              <p>7 daye for weike from 9 am to 12am</p>
            </div>
          </div>
        </nav>
        <div className="mob-menu" onClick={()=>{openmobmenu()}}>
            <span id='line-1'></span>
            <span id='line-2'></span>
            <span id='line-3'></span>
          </div>
          <div className='cart-icon'>
            <a href="#" onClick={(e)=>{e.preventDefault(); setopencart(!opencart)}}><img src={cartIcon}/></a>
          </div>
        <Cart opencart={opencart}/>
      </div>
    </header>
  )
}

export default Header