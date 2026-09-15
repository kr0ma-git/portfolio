import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import TechStack from "./sections/TechStack";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Analytics />
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
