import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Newsletter from './pages/newsletter/Newsletter';

function App() {

  return (
    <div className="mt-5 ml-5 mr-5 max-w-8/10 md:max-w-6/10">
      <Navbar />
      <div className="mx-auto max-w-98/100 border-2 border-b-gray-950">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/newsletter' element={<Newsletter />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
