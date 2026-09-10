const links = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Nav = () => {
  return (
    <header className="fixed top-0 z-40 w-full">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-display text-sm text-text">
          Kroma
        </a>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
