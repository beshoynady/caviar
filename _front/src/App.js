import React,{createContext, useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



import './App.css';
import Userscreen from './screens/user.screen/Userscreen';
import products from './menu.json'
import ManagLayout from './screens/management/ManagLayout';
import Home from './screens/user.screen/component/home/Home';
import Offers from './screens/user.screen/component/offers/Offers';
import Menu from './screens/user.screen/component/menu/Menu';
import Contact from './screens/user.screen/component/contact/Contact';
import Location from './screens/user.screen/component/location/Location';
import ManagerDash from './screens/management/manag.component/managerdash/ManagerDash';
import Orders from './screens/management/manag.component/orders/Orders';
import Products from './screens/management/manag.component/products/Products';
import Tables from './screens/management/manag.component/tables/Tables'; 
import Employees from './screens/management/manag.component/employees/Employees'; 
import Category from './screens/management/manag.component/category/Category';


export const detacontext = createContext({})

function App() {
  const [count, setcount] = useState(0)
  const products_menu = products

  

  const increment =(id) =>{ 
    setcount(count + 1)
    const product= products_menu.find(product=>product.id == id)
    product.count = product.count + 1
  };

  const descrement =(id) =>{
    setcount(count -1)
    const product= products_menu.find(product=>product.id == id)
    if(product.count<1){
      product.count = 0
    }else{
        product.count = product.count - 1   
      }  
    } ;
  const [items, setitems] = useState([])

  const getcartitemsdata = (id) =>{
    const cartitem= products_menu.filter(item => item.id === id)
    if (items.length>0) {
      const repeateditem = items.filter(item => item.id === id)
      if(repeateditem.length ==0) {
      setitems([...items, ...cartitem]) 
    }
    }else{
        setitems([...cartitem]) 
    }
  }

  
  const [cost, setcost] = useState(0)
  
  const allcost=()=>{
    if (items.length>0){
      let total = 0;
      items.map((item)=>{
        const itemcost = item.price * item.count;
        total += itemcost
        setcost(total)
      })
    }else{
      setcost(0)
    }
  }

  
  const deleteitems = (id)=>{
    const withotdeleted = items.filter(item=>item.id !== id)
    setitems(withotdeleted);
  }

  

  
  const [category, setcategory] = useState('اسماك')

  const getcategory =(e)=>{
    setcategory(e.target.value)
  }
  
  useEffect(() => {
    allcost()
}, [items,count])

  return (
    
    <detacontext.Provider value={{products_menu,getcategory,deleteitems, category, items, cost, getcartitemsdata, increment, descrement}}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Userscreen/>}>
              <Route index ='home' element={<Home/>}/>
              <Route path='offer' element={<Offers/>}/>
              <Route path='menu' element={<Menu/>}/>
              <Route path='location' element={<Location/>}/>
              <Route path='contact' element={<Contact/>}/>
            </Route>
{/* 
            <Route path=':num' element={<Userscreen/>}>
              <Route index ='home' element={<Home/>}/>
              <Route path='offer' element={<Offers/>}/>
              <Route path='menu' element={<Menu/>}/>
              <Route path='location' element={<Location/>}/>
              <Route path='contact' element={<Contact/>}/>
            </Route> */}

            <Route exact path='/management' element={<ManagLayout/>}>
                <Route index  element={<ManagerDash/>}/>
                <Route path='orders' element={<Orders/>}/>
                {/* <Route path='products' element={<Products/>}/> */}
                <Route path='tables' element={<Tables/>}/>
                <Route path='employees' element={<Employees/>}/>
                <Route path='category' element={<Category/>}/>
            </Route>   
            
          </Routes>
        </BrowserRouter>
    </detacontext.Provider>
    
  );
}

export default App;
