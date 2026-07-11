import React, { useEffect, useState } from "react";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import instagramIcon from "../images/socials/instagram.svg";

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
          <li><a href="#footer">Contacts</a></li>
        </ul>
      </nav>

      <div className="header-right">
        <div className="nav-divider" />
        <div className="nav-social">
          <a href="https://www.instagram.com/dulanjanarmd" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://github.com/dulanjanarmd" target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/dulanjanarmd" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
