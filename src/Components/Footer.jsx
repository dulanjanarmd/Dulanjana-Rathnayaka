import React from "react";
import PropTypes from "prop-types";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = ({ name, email, gitHub, linkedIn, instagram }) => (
  <div id="footer">
    <div className="contact-inner">

      {/* LEFT */}
      <div className="reveal-left">
        <div className="sec-label">Get In Touch</div>
        <h2 className="sec-title">CONTACT <span>ME</span></h2>
        <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "2rem" }}>
          I&apos;m currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open!
        </p>

        {[
          { icon: "📧", label: "Email", val: email },
          { icon: "🎓", label: "University", val: "SLIIT — Sri Lanka" },
          { icon: "📍", label: "Location", val: "Sri Lanka" },
        ].map(item => (
          <div className="contact-info-item" key={item.label}>
            <div className="c-icon">{item.icon}</div>
            <div>
              <div className="ci-label">{item.label}</div>
              <div className="ci-val">{item.val}</div>
            </div>
          </div>
        ))}

        <div className="contact-socials">
          {[
            { icon: envelopeIcon, alt: "Email", href: `mailto:${email}` },
            { icon: gitHubIcon, alt: "GitHub", href: `https://github.com/${gitHub}` },
            { icon: linkedInIcon, alt: "LinkedIn", href: `https://www.linkedin.com/in/${linkedIn}` },
            { icon: instagramIcon, alt: "Instagram", href: `https://www.instagram.com/${instagram}` },
          ].map(s => (
            <a key={s.alt} href={s.href}
              target={s.alt === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="c-social" title={s.alt}>
              <img src={s.icon} alt={s.alt} />
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — Form */}
      <div className="reveal-right">
        <form className="contact-form"
          onSubmit={e => { e.preventDefault(); window.location.href = `mailto:${email}`; }}>
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
            <label>Email</label>
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
          <button type="submit" className="hero-btn"
            style={{ border: "2px solid #fff", background: "transparent", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
            Send Message
          </button>
        </form>
      </div>

    </div>

    <div className="footer-bar">
      <div className="footer-logo-txt">D. Rathnayaka</div>
      <p className="footer-copy">© {new Date().getFullYear()} {name}. All rights reserved.</p>
      <p className="footer-copy">Built with React · GitHub Pages</p>
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
