import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";

// Words that cycle after the main name
const ROLES = [
  "BUSINESS ANALYST",
  "DATA ANALYST",
  "SYSTEM ANALYST",
  "IT UNDERGRADUATE",
];

// Split a string into letter spans for stagger animation
const AnimatedText = ({ text, className, delay = 0 }) => (
  <span className={className} aria-label={text}>
    {text.split("").map((ch, i) => (
      <span
        key={i}
        className="letter"
        style={{ animationDelay: `${delay + i * 0.045}s` }}
      >
        {ch === " " ? "\u00A0" : ch}
      </span>
    ))}
  </span>
);

const Home = ({ name }) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex]   = useState(0);
  const [charIndex, setCharIndex]   = useState(0);
  const [deleting, setDeleting]     = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  // Trigger name animation on mount
  useEffect(() => {
    const t = setTimeout(() => setNameVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typing effect for roles
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed   = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length)
          setTimeout(() => setDeleting(true), 2000);
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

  return (
    <section id="home">
      {/* LEFT */}
      <div className="hero-left">

        {/* HI I'M + NAME — same font, same size */}
        <h1 className={`hero-name-block${nameVisible ? " name-visible" : ""}`}>
          <span className="name-line hero-greeting">HI, I&apos;M</span>
          <AnimatedText text="DULANJANA" className="name-line" delay={0.15} />
          <AnimatedText text="RATHNAYAKA" className="name-line name-line-2" delay={0.55} />
        </h1>

        {/* ISE subtitle */}
        <div className="hero-ise">Information Systems Engineering Undergraduate at SLIIT</div>

        {/* Typing role */}
        <div className="hero-role-line">
          Aspiring&nbsp;
          <span className="hero-typed">{displayText}</span>
          <span className="typing-cursor" />
        </div>

        <p className="hero-desc">
          Passionate about bridging technology and business through
          data-driven insights, analytical thinking, and smart system design.
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
