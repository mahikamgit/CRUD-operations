import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Myapp.jsx'
import { BrowserRouter } from 'react-router-dom'
import Myapp from './Components/Myapp.jsx'
import Product from './Products/Product.jsx'
import Parent from './Props/Parent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
       <Myapp/>
    </BrowserRouter>
    
  </React.StrictMode>,
)
