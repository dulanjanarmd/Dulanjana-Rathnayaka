import React from "react";
import PropTypes from "prop-types";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = ({ name, email, gitHub, linkedIn, instagram }) => (
  <div id="footer">
    <div className="contact-inner">

      {/* LEFT — Info */}
      <div className="reveal-left">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="divider" />
        <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.9, marginBottom: "2rem" }}>
          I&apos;m currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open!
        </p>

        <div className="contact-info-item">
          <div className="contact-icon">📧</div>
          <div>
            <div className="ci-label">Email</div>
            <div className="ci-val">{email}</div>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-icon">🎓</div>
          <div>
            <div className="ci-label">University</div>
            <div className="ci-val">SLIIT — Sri Lanka</div>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-icon">📍</div>
          <div>
            <div className="ci-label">Location</div>
            <div className="ci-val">Sri Lanka</div>
          </div>
        </div>

        <div className="contact-socials">
          {[
            { icon: envelopeIcon, alt: "Email", href: `mailto:${email}` },
            { icon: gitHubIcon, alt: "GitHub", href: `https://github.com/${gitHub}` },
            { icon: linkedInIcon, alt: "LinkedIn", href: `https://www.linkedin.com/in/${linkedIn}` },
            { icon: instagramIcon, alt: "Instagram", href: `https://www.instagram.com/${instagram}` },
          ].map(s => (
            <a key={s.alt} href={s.href} target={s.alt === "Email" ? "_self" : "_blank"} rel="noopener noreferrer" className="contact-social" title={s.alt}>
              <img src={s.icon} alt={s.alt} />
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — Form */}
      <div className="reveal-right">
        <form
          className="contact-form"
          onSubmit={e => { e.preventDefault(); window.location.href = `mailto:${email}`; }}
        >
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Project Inquiry" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer", justifyContent: "center" }}>
            Send Message →
          </button>
        </form>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="footer-bottom">
      <div className="footer-logo">D<span>.</span>Rathnayaka</div>
      <p className="footer-copy">© {new Date().getFullYear()} {name}. All rights reserved.</p>
      <p className="footer-copy">Built with React · Deployed on GitHub Pages</p>
    </div>
  </div>
);

Footer.defaultProps = { name: "" };
Footer.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  instagram: PropTypes.string,
};

export default Footer;
