import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainroutes from './Mainroutes'
import Navbar from './Compontes/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App
