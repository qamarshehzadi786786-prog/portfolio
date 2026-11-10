import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Project from "./Components/Project"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
          <Services />
           <Contact />
      </main>
       <Footer />
    </div>
  )
}

export default App