import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { Hero } from "./sections/Hero/Hero";
import { Skills } from "./sections/Skills/Skills";
import { Projects } from "./sections/Projects/Projects";
import { Experience } from "./sections/Experience/Experience";
import { AboutContact } from "./sections/AboutContact/AboutContact";
import { About } from "./sections/About/About";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}

export default App;