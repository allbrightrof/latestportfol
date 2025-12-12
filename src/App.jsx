import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills"
import Projects from "./Projects/Projects"
import Certificates from './certificate/Certificate';
import Contact from './contact/Contact';
function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Certificates/>
    <Contact/>
    </>
  )
}
export default App;
