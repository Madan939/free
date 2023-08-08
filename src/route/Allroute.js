import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Contact, Home, Product, } from '../pages'

export const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Product" element={<Product />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
    </Routes>
  )
}

// export default Allroute