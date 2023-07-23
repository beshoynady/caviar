import React from 'react';
import './Show_menu.css';
import { detacontext } from '../../../../../App';

const Show_menu = () => {
   return (
      <detacontext.Consumer>
         {
            ({products_menu,category,getcartitemsdata, increment, descrement})=>{
               return(
                  <div className="products">
                  <div className="product">
                     {products_menu.filter(pro=>pro.category==category).map((product, index) =>{
                     return(
                        <div className="menu-card" key={index}>
                           <img src={require(`../../../../image/menu/${product.img}`)} alt="" />
                           <div className="detalis">
                              <div className='product-det'>
                                 <h2>{product.name}</h2>
                                 <p>{product.desc}</p>
                              </div>
                              <div className="price">
                                 <p>السعر{product.price}</p>
                                 <div className="count">
                                    <button className='symb' onClick={()=>descrement(product.id)}>-</button>
                                    <span className='num'>{product.count<1?0:product.count}</span>
                                    <button className='symb' onClick={()=>increment(product.id)}>+</button>
                                 </div>
                              </div>
                              <div className='add_cart'>
                                 <button onClick={()=>{if(product.count>0){getcartitemsdata(product.id, product.count)}}}>اضف الي طلباتي</button>
                              </div>
                           </div>
                        </div>
                     )
                     })
                     }
                  </div>
               </div>
               )
            }
         }
      </detacontext.Consumer>
      
   )
}

export default Show_menu