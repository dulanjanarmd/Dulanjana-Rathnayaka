import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "services", "portfolio", "footer"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <a href="#home" className="header-logo">D<span>.</span>Rathnayaka</a>
      <nav>
        <ul className="header-nav">
          {[["home","Home"],["about","About"],["services","Services"],["portfolio","Portfolio"],["footer","Contact"]].map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""}>{label}</a>
            </li>
          ))}
          <li><a href="#footer" className="header-cta">Hire Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
