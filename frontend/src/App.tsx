import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Skills } from "./sections/Skills/Skills";
import { Projects } from "./sections/Projects/Projects";
import { Experience } from "./sections/Experience/Experience";
import { Contact } from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;