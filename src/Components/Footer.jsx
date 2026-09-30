import React, { useEffect } from "react";
import PropTypes from "prop-types";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import redditIcon from "../images/socials/reddit.svg";
import mediumIcon from "../images/socials/medium.svg";
import xIcon from "../images/socials/x.svg";

const Footer = ({ name, email, gitHub, linkedIn, reddit, medium }) => {
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
      {/* CTA & Socials */}
      <div className="clean-contact-cta reveal-left">
        <div className="cc-label">GET IN TOUCH</div>
        <h3 className="cc-title">Have an idea?<br/>Let's build it.</h3>
        <p className="cc-desc" style={{ margin: '0 auto 3rem' }}>
          Open to consulting, collaborations, and interesting conversations about tech, business analysis, and product.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
          <a href={`mailto:${email}`} className="hero-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1.5rem', width: 'fit-content', textTransform: 'lowercase' }}>
            {email} <span className="arrow">→</span>
          </a>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div className="cc-label" style={{ marginBottom: 0 }}>CONNECT WITH ME</div>
            <div className="cc-inline-socials" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              {[
                { name: "LinkedIn",  icon: linkedInIcon,  href: `https://www.linkedin.com/in/${linkedIn}` },
                { name: "GitHub",    icon: gitHubIcon,    href: `https://github.com/${gitHub}` },
              ].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-social-item" title={s.name}>
                  <img src={s.icon} alt={s.name} style={{ width: '28px', height: '28px', opacity: '0.8', transition: 'opacity 0.3s ease' }} />
                </a>
              ))}
            </div>
          </div>
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
  reddit: PropTypes.string,
  medium: PropTypes.string,
};

export default Footer;
