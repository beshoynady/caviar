import React from 'react'
import { detacontext } from '../../../../App'
import './Cart.css'

const Cart = (props) => {
  const open = props.opencart

  return (
    <detacontext.Consumer>
      {
        ({ items, cost, deleteitems }) => {
          return (
            <div className='cart' style={open ? { 'display': 'flex' } : { 'display': 'none' }}>
              {items.map((i, index) => {
                return (
                  <div className="cart-item">
                    <div className="cart-img">
                      <img src={require(`../../../image/menu/${i.img}`)} alt="" srcSet="" />
                    </div>
                    <div className="cart-detalis">
                      <div className="item-detalis">
                        <p>المنتج: {i.name}</p>
                        <p>السعر:{i.price}</p>
                        <p>الكمية:{i.count}</p>
                      </div>
                      <div className="item-cost">
                        <p>{i.price * i.count}</p>
                      </div>
                      <div className='delete'>
                        <button onClick={() => deleteitems(i.id)}>حذف</button>
                      </div>
                    </div>
                  </div>
                )
              })
              }
              <div className="final">
                <button>تاكيد الطلب</button>
                <div className='total'>
                  <p>الاجمال</p>
                  <p>{cost}</p>
                </div>
              </div>
            </div>
          )
        }
      }
    </detacontext.Consumer>
  )
}

export default Cart