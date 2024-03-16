import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Work from "./Components/Work"
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Experience/>
      <Work/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
