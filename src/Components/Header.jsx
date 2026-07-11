import React, { useEffect, useState } from "react";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import instagramIcon from "../images/socials/instagram.svg";
import redditIcon from "../images/socials/reddit.svg";
import xIcon from "../images/socials/x.svg";
import mediumIcon from "../images/socials/medium.svg";
import facebookIcon from "../images/socials/facebook.svg";
import whatsappIcon from "../images/socials/whatsapp.svg";

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
          <a href="https://github.com/dulanjanarmd" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src={gitHubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/dulanjanarmd" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/dulanjanarmd" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/dulanjanarmd" target="_blank" rel="noopener noreferrer" title="Facebook">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://wa.me/dulanjanarmd" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://www.reddit.com/user/dulanjanarmd" target="_blank" rel="noopener noreferrer" title="Reddit">
            <img src={redditIcon} alt="Reddit" />
          </a>
          <a href="https://x.com/dulanjanarmd" target="_blank" rel="noopener noreferrer" title="X">
            <img src={xIcon} alt="X" />
          </a>
          <a href="https://medium.com/@dulanjanarmd" target="_blank" rel="noopener noreferrer" title="Medium">
            <img src={mediumIcon} alt="Medium" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
