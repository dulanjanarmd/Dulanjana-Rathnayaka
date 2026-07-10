import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = ({ email, gitHub, instagram, linkedIn, name }) => {
  const socials = [
    { icon: envelopeIcon, alt: "Email", href: `mailto:${email}`, show: !!email },
    { icon: gitHubIcon, alt: "GitHub", href: `https://github.com/${gitHub}`, show: !!gitHub },
    { icon: linkedInIcon, alt: "LinkedIn", href: `https://www.linkedin.com/in/${linkedIn}`, show: !!linkedIn },
    { icon: instagramIcon, alt: "Instagram", href: `https://www.instagram.com/${instagram}`, show: !!instagram },
  ];

  return (
    <div id="footer">
      <div className="footer-name">{name}</div>
      <p className="footer-tagline">
        BSc(Hons) IT · Information Systems Engineering · SLIIT
      </p>
      <div className="social-links">
        {socials.filter((s) => s.show).map((s) => (
          <a
            key={s.alt}
            href={s.href}
            target={s.alt === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="social-link"
            title={s.alt}
          >
            <img src={s.icon} alt={s.alt} />
          </a>
        ))}
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} {name} · Built with React
      </p>
    </div>
  );
};

Footer.defaultProps = { name: "" };
Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Footer;
