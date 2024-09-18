import { useState } from 'react'
import './index.css'
import './App.css'
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
         <Layout/>
         <Header/>
      </div>
    </>
  )
}

export default App
