import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Home } from './pages/home/Home';
import { Blog } from './pages/blog/Blog';
import { About } from './pages/about/About';
import { Newsletter } from './pages/newsletter/Newsletter';
// import { useState } from 'react'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/newsletter' element={<Newsletter />} />
      </Routes>
    </div>
  )
}

export default App
