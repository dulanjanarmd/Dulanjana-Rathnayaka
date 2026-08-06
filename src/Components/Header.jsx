import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <a href="/" className="header-logo">Dulanjana Rathnayaka</a>

      <nav>
        <ul className="header-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#footer">Contacts</a></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
