import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./i18n.jsx"
import { RouterProvider } from 'react-router'
import router from './Components/Router/Router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
