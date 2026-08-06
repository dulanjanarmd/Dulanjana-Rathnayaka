import React from "react";
import PropTypes from "prop-types";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import instagramIcon from "../images/socials/instagram.svg";
import facebookIcon from "../images/socials/facebook.svg";
import xIcon from "../images/socials/x.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import whatsappIcon from "../images/socials/whatsapp.svg";

const Footer = ({ name, email, phone, gitHub, linkedIn, instagram, facebook }) => (
  <div id="footer" className="modern-footer">
    <div className="edu-header reveal-left">
      <div className="sec-label">Contact</div>
      <h2 className="sec-title">LET'S WORK <span>TOGETHER.</span></h2>
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
            { name: "Phone",     icon: whatsappIcon,  href: phone ? `tel:${phone.replace(/\s+/g, '')}` : "#" },
            { name: "LinkedIn",  icon: linkedInIcon,  href: `https://www.linkedin.com/in/${linkedIn}` },
            { name: "GitHub",    icon: gitHubIcon,    href: `https://github.com/${gitHub}` },
            { name: "X",         icon: xIcon,         href: `https://x.com/${gitHub}` },
            { name: "Facebook",  icon: facebookIcon,  href: `https://www.facebook.com/${facebook}` },
            { name: "Instagram", icon: instagramIcon, href: `https://www.instagram.com/${instagram}` },
          ].map(s => (
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

Footer.defaultProps = { name: "" };
Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
};

export default Footer;
