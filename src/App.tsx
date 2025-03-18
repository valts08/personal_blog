import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Newsletter from './pages/newsletter/Newsletter';
import Footer from "./components/Footer";

function App() {

  return (
    <div className="mt-5 mx-auto max-w-9/10 md:max-w-8/10 lg:max-w-6/10">
      <Navbar />
      <div className="px-5 mx-auto max-w-98/100 border-x-[1.5px] border-b-[1.5px] bg-neutral-50 border-neutral-100">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/newsletter' element={<Newsletter />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
