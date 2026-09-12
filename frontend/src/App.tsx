import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Skills } from "./sections/Skills/Skills";
import { Projects } from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;