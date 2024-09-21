import { useState } from 'react'
import './index.css'
import './App.css'
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Menu from './Components/Menu/Menu'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
         <Layout/>
         <Header/>
         <Hero/>
        <Menu/>
      </div>
    </>
  )
}

export default App
