import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { BrowserRouter } from 'react-router-dom'

//strictmode for finding bugs
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>,
)