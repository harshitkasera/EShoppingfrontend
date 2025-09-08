

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import ViewProduct from './Component/Admin/ViewProduct'
import Sidebar from './Component/Admin/Sidebar'
import Addproduct from './Component/Admin/Addproduct'
import Cart from './Component/Cart'
import Footer from './Component/Footer'
import "./index.css"

function App() {
const [cart, setcart]=useState([])

const handleitem = (items) => {
  const ispresent = cart.some((product) => product._id === items._id);

  if (ispresent) {
    alert("Already in cart");
    return;
  }
  setcart([...cart, { ...items, qty: 1 }]);
};


  return (<>
   <div >

 
     <Navbar size={cart.length}/>
    
    
    <Routes>
      <Route path='/admin' element={<Sidebar/>}></Route>
      <Route path='/' element={<Home handleitem={handleitem}/>}></Route>
      <Route path='/cart' element={<Cart cart={cart}setcart={setcart}/>}></Route>
      <Route path='/viewProduct' element={<ViewProduct/>}></Route>
      <Route path='/Addproduct' element={<Addproduct/>}></Route>
    </Routes>

    <Footer/>
</div>
  </>
  
  )

}



export default App
