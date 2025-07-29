import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './assets/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Outlet />
    <Navbar />
    </>
  )
}

export default App
