import { useState } from 'react'
import './index.css'
import './App.css'
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Menu from './Components/Menu/Menu'
import Section from './Components/Section/Section'
import Main from './Components/Main/Main'
import Cloos from './Components/Cloos/Cloos'
import Lelfte from './Components/Lelfte/Lelfte'
import Blue from './Components/Blue/Blue'
import Bollen from './Components/Bollen/Bollen'
import Footer from './Components/Footer/Footer'


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
         <Main/>
         <Cloos/>
         <Lelfte/>
         <Blue/>
         <Bollen/>
         <Footer/>
      </div>
    </>
  )
}

export default App
