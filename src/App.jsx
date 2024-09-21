import { useState } from 'react'
import './index.css'
import './App.css'
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Menu from './Components/Menu/Menu'
import Section from './Components/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
         <Layout/>
         <Header/>
         <Hero/>
         <Menu/>
         <Section/>
      </div>
    </>
  )
}

export default App
