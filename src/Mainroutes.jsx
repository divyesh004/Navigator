import React from 'react'
import { Routes, Route } from "react-router-dom";
import Product from "./Compontes/Product"


const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/about' element={<h1>about</h1>}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/login' element={<h1>Login</h1>}></Route>
      </Routes>
    </div>
  )
}

export default Mainroutes
