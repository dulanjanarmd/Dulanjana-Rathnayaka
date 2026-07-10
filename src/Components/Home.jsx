import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";

const ROLES = ["BUSINESS ANALYST", "DATA ANALYST", "SYSTEM ANALYST"];

const Home = ({ name }) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), 2000);
        else setCharIndex(c => c + 1);
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex(r => (r + 1) % ROLES.length);
          setCharIndex(0);
        } else setCharIndex(c => c - 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ");

  return (
    <section id="home">
      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-greeting">Hi, I&apos;m {firstName}</div>
        <h1 className="hero-title">
          <span className="role-line">I&apos;M A</span>
          <span className="typed-wrap">
            {displayText}
            <span className="typing-cursor" />
          </span>
        </h1>
        <p className="hero-desc">
          BSc(Hons) IT undergraduate at SLIIT, specialized in Information Systems
          Engineering. Passionate about bridging technology and business through
          data-driven insights and analytical thinking.
        </p>
        <a href="#portfolio" className="hero-btn">View My Projects</a>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <img src={profilePhoto} alt={name} className="hero-photo" />
      </div>
    </section>
  );
};

Home.defaultProps = { name: "" };
Home.propTypes = { name: PropTypes.string.isRequired };
export default Home;
