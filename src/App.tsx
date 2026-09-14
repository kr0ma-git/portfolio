import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <div className="h-auto">
          <TechStack />
        </div>
        <Contact />
      </main>
    </>
  );
};

export default App;
