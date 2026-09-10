import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";

const App = () => {
  return (
    <>
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
