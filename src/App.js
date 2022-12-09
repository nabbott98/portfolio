import './App.css'

// Import HashLink related react components
import { BrowserRouter } from "react-router-dom"

// Import Components
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
        <BrowserRouter>
          <Header/>
          <AboutMe/>
          <Projects/>
          <Skills/>
        </BrowserRouter>
    </>
  )
}

export default App
