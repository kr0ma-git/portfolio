import { links } from "../constants/const.ts";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("mark");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-40 w-full">
      <nav
        className={`mx-auto w-[90%] mt-2 rounded-full flex h-14 max-w-5xl items-center justify-between px-6 py-6 md:px-10 ${!isHeroVisible ? "backdrop-blur-sm" : "bg-transparent"}`}
      >
        <a href="#top" className="text-header text-sm text-text">
          Kroma
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-header text-sm text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/files/WayneYano_resume_2026_update.pdf" target="_blank">
          <p className="text-text font-display">Download CV</p>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
