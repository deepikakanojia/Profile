import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Portfolio from './pages/Portfolio'
import Research from './pages/Research'
import Positions from './pages/Positions'
import Workshops from './pages/Workshops'
import Hobbies from './pages/Hobbies'
import Contact from './pages/Contact'
import Faq from './pages/Faq'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio-and-work-experience" element={<Portfolio />} />
        <Route path="/research" element={<Research />} />
        <Route path="/position-of-responsibility" element={<Positions />} />
        <Route path="/workshop-and-conferences" element={<Workshops />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/queries-about-m-tech-programme" element={<Faq />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <HashRouter>
      <Background />
      <Navbar />
      <ScrollToTop />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
