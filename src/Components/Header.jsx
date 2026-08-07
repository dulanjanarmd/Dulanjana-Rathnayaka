import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-is-open" : ""}`}>
      <a href="#home" className="header-logo" onClick={closeMenu}>Dulanjana Rathnayaka</a>

      <button 
        className={`mobile-toggle${menuOpen ? " active" : ""}`} 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav-container${menuOpen ? " mobile-visible" : ""}`}>
        <ul className="header-nav">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
          <li><a href="#footer" onClick={closeMenu}>Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
