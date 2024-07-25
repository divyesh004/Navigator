import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li><Link to={'/'}>Home</Link ></li>
        <li><Link to={'about'}>About</Link ></li>
        <li><Link to={'product'}>PRoduct</Link></li>
        <li><Link to={'login'}>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
