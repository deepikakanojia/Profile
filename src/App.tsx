import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import More from './components/More'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <More />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
