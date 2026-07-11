import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";

const ROLES = ["BUSINESS ANALYST", "DATA ANALYST", "SYSTEM ANALYST", "IT UNDERGRADUATE"];

const AnimatedText = ({ text, className, delay = 0 }) => (
  <span className={className} aria-label={text}>
    {text.split("").map((ch, i) => (
      <span key={i} className="letter" style={{ animationDelay: `${delay + i * 0.045}s` }}>
        {ch === " " ? "\u00A0" : ch}
      </span>
    ))}
  </span>
);

const Home = ({ name }) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex]     = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [deleting, setDeleting]       = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setNameVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

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

  return (
    <section id="home">
      <div className="hero-bg">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="hero-dot" style={{
            left: `${(i * 5.8) % 100}%`,
            top: `${(i * 7.3) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${6 + (i % 4)}s`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
          }} />
        ))}
      </div>

      {/* LEFT */}
      <div className="hero-left">
        <h1 className={`hero-name-block${nameVisible ? " name-visible" : ""}`}>
          <span className="name-line hero-greeting">HI, I&apos;M</span>
          <AnimatedText text="DULANJANA RATHNAYAKA" className="name-line name-full" delay={0.15} />
        </h1>

        <div className="hero-ise">
          Information Systems Engineering Undergraduate at SLIIT
        </div>

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
        <div className="hero-photo-circle">
          <img src={profilePhoto} alt={name} className="hero-photo" />
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = { name: "" };
Home.propTypes = { name: PropTypes.string.isRequired };
export default Home;
