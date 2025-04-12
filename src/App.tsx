import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import Navbar from './components/Navbar'
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Newsletter from './pages/newsletter/Newsletter';
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [globalDarkTheme, setGlobalDarkTheme] = useState<boolean | null>(false)

  const handleGlobalThemeToggle = () => {
    setGlobalDarkTheme(prevValue => !prevValue)
  }

  return (
    <div className="mt-5 mx-auto max-w-9/10 md:max-w-8/10 lg:max-w-6/10">
      <ThemeContext.Provider value={globalDarkTheme}>
        <Navbar toggleFunc={handleGlobalThemeToggle}/>
        <div className="px-5 mx-auto max-w-98/100 border-x border-b bg-neutral-100 border-neutral-200">
          <Routes>
            <Route path='personal_blog/' element={<Home />} />
            <Route path='personal_blog/blog' element={<Blog />} />
            <Route path='personal_blog/about' element={<About />} />
            <Route path='personal_blog/newsletter' element={<Newsletter />} />
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
