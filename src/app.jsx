import React from 'react'
import { useRef } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Work from './components/Work'
import ProjectPage from './components/Project'
import ProjectPage1 from './components/Project1'
import ProjectPage2 from './components/Project2'
import ProjectPage3 from './components/Project3'
import ProjectPage4 from './components/Project4'
import ProjectPage5 from './components/Project5'
import ProjectPage6 from './components/Project6'
import Home from './Pages/Home'

const App = () => {

  return <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/work" element={<Work />}></Route>
      <Route path="/project/0" element={<ProjectPage />}></Route>
      <Route path="/project/1" element={<ProjectPage1 />}></Route>
      <Route path="/project/2" element={<ProjectPage2 />}></Route>
      <Route path="/project/3" element={<ProjectPage3 />}></Route>
      <Route path="/project/4" element={<ProjectPage4 />}></Route>
      <Route path="/project/5" element={<ProjectPage5 />}></Route>
      <Route path="/project/6" element={<ProjectPage6 />}></Route>
    </Routes>
  </>
}

export default App

