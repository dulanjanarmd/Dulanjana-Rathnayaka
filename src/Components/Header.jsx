import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Header = ({ theme, toggleTheme }) => {
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
      <a href="/" className="header-logo" onClick={closeMenu}>Dulanjana Rathnayaka</a>

      <div className="header-actions">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            /* Sun Icon for Dark Mode (click to go Light) */
            <svg className="theme-icon sun-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            /* Moon Icon for Light Mode (click to go Dark) */
            <svg className="theme-icon moon-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>

        <button 
          className={`mobile-toggle${menuOpen ? " active" : ""}`} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`header-nav-container${menuOpen ? " mobile-visible" : ""}`}>
        <ul className="header-nav">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#footer" onClick={closeMenu}>Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  theme: "dark",
  toggleTheme: () => {},
};

Header.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default Header;

