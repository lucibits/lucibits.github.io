import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import Project from './components/Project'
import './index.css'
import './app.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    {/* <Project /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
