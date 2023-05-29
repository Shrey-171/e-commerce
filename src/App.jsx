import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cart from './features/cart/Cart'
import Navbar from './features/utility/Navbar'

export default function App() { 
  const [showCart, setShowCart] = useState(true)

  return (
    <div className='container-fluid'>
        <section className='row'>
          <div className='p-0 col vh-100 overflow-y-scroll'>
            <Navbar setShowCart={setShowCart}/>
            <Outlet />
          </div>
          <Cart showCart={showCart} setShowCart={setShowCart}/>
        </section>        
    </div>
  )
}
