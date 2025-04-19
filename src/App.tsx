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

  const [globalDarkTheme, setGlobalDarkTheme] = useState<boolean>(false)

  let bodyColorToggleMap = new Map([
    [true, "bg-neutral-900"],
    [false, "bg-neutral-100"]
  ])
  // getting the body element so that we can change the background
  const htmlBody = document.getElementsByTagName("body")[0]
  bodyColorToggleMap.get(globalDarkTheme)
  htmlBody.setAttribute("class", `${bodyColorToggleMap.get(globalDarkTheme)}`)

  const handleGlobalThemeToggle = () => {
    setGlobalDarkTheme(!globalDarkTheme)
    htmlBody.setAttribute("class", `${bodyColorToggleMap.get(!globalDarkTheme)}`)
  }

  return (
    <ThemeContext.Provider value={globalDarkTheme}>
      <div className="mt-5 mx-auto max-w-9/10 md:max-w-8/10 lg:max-w-6/10" id="page-container">
        <Navbar toggleFunc={handleGlobalThemeToggle}/>
        <div className={`px-5 mx-auto max-w-98/100 border-x border-b ${globalDarkTheme ? "bg-neutral-900 border-neutral-700" : "bg-neutral-100 border-neutral-200" }`}>
          <Routes>
            <Route path='/personal_blog' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/newsletter' element={<Newsletter />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
