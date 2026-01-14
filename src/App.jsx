import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/index/Home'
import About from './components/index/About'
import Experience from './components/index/Experience'
import Resume from './components/index/Resume'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App