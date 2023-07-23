import React from 'react'
import './Menu.css'
import Show_menu from './_show_menu/Show_menu';
import {detacontext} from '../../../../App'


const Menu = () => {
  return (
    <detacontext.Consumer>
      {
        ({getcategory})=>{
          return(
            <section className='menu'>
              <div className="container">
                <nav>
                  <ul>
                    <li><button value={'اسماك'} onClick={getcategory}>الاسماك</button></li>
                    <li><button value={'جمبري'} onClick={getcategory}>الجمبري</button></li>
                    <li><button value={'طاجن'} onClick={getcategory}>الطواجن</button></li>
                    <li><button value={'ارز'} onClick={getcategory}>الارز و المعجنات</button></li>
                    <li><button value={'شوربه'} onClick={getcategory}>الشوربه</button></li>
                    <li><button value={'سلطة'} onClick={getcategory}>السلطات</button></li>
                  </ul>
                </nav>
                <Show_menu/>
              </div>
            </section>
          )
        }
      }
    </detacontext.Consumer>
  )
}

export default Menu