import About from "./sections/About";
import Contact from "./sections/Contact";
import Grain from "./sections/Grain";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";

const App = () => {
  return (
    <>
      <Grain />
      <Nav />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
};

export default App;
