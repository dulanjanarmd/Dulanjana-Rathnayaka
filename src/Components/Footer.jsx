import React, { useEffect } from "react";
import PropTypes from "prop-types";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import instagramIcon from "../images/socials/instagram.svg";
import facebookIcon from "../images/socials/facebook.svg";
import redditIcon from "../images/socials/reddit.svg";
import mediumIcon from "../images/socials/medium.svg";
import xIcon from "../images/socials/x.svg";

const Footer = ({ name, email, gitHub, linkedIn, instagram, facebook, reddit, medium }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("#footer .reveal-left, #footer .reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="footer" className="modern-footer">
      {/* Background: radial glow + corner accents */}
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-corner footer-corner-tl" aria-hidden="true" />
      <div className="footer-corner footer-corner-tr" aria-hidden="true" />
      <div className="footer-corner footer-corner-bl" aria-hidden="true" />
      <div className="footer-corner footer-corner-br" aria-hidden="true" />

    <div className="edu-header reveal-left">
      <div className="sec-label">Contact</div>
      <h2 className="sec-title">LET&apos;S WORK <span>TOGETHER.</span></h2>
    </div>

    <div className="clean-contact-grid">
      {/* LEFT — CTA */}
      <div className="clean-contact-cta reveal-left">
        <div className="cc-label">GET IN TOUCH</div>
        <h3 className="cc-title">Have an idea?<br/>Let's build it.</h3>
        <p className="cc-desc">
          Open to consulting, collaborations, and interesting conversations about tech, business analysis, and product.
        </p>
        <a href={`mailto:${email}`} className="hero-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1.5rem', width: 'fit-content' }}>
          {email} <span className="arrow">→</span>
        </a>
      </div>

      {/* RIGHT — Socials */}
      <div className="clean-contact-socials reveal-right">
        <div className="cc-label">CONNECT WITH ME</div>
        <div className="cc-social-list">
          {[
            { name: "LinkedIn",  icon: linkedInIcon,  href: `https://www.linkedin.com/in/${linkedIn}` },
            { name: "GitHub",    icon: gitHubIcon,    href: `https://github.com/${gitHub}` },
            { name: "X",         icon: xIcon,         href: `https://x.com/${gitHub}` },
            { name: "Facebook",  icon: facebookIcon,  href: `https://www.facebook.com/${facebook}` },
            { name: "Instagram", icon: instagramIcon, href: `https://www.instagram.com/${instagram}` },
            { name: "Reddit",    icon: redditIcon,    href: `https://www.reddit.com/user/${reddit}` },
            { name: "Medium",    icon: mediumIcon,    href: `https://medium.com/@${medium}` },
          ].map((s, i) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="cc-social-item">
              <div className="cc-social-left">
                <img src={s.icon} alt={s.name} />
                <span>{s.name}</span>
              </div>
              <span className="cc-social-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="modern-footer-bottom">
      <div className="mf-logo">{name}</div>
      <div className="mf-copy">
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p className="mf-tech">Built with React & Parcel · Deployed on GitHub Pages</p>
      </div>
    </div>
    </div>
  );
};

Footer.defaultProps = { name: "" };
Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
  reddit: PropTypes.string,
  medium: PropTypes.string,
};

export default Footer;
