import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;