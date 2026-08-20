import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";
import cvDocument from "../documents/Dulanjana_Rathanayaka_Resume.pdf";

const ROLES = ["BUSINESS ANALYST", "SYSTEMS ANALYST"];

const AnimatedText = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");
  let globalLetterIdx = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wIdx) => {
        const letters = word.split("").map((ch) => {
          const idx = globalLetterIdx++;
          return (
            <span key={idx} className="letter" style={{ animationDelay: `${delay + idx * 0.045}s` }}>
              {ch}
            </span>
          );
        });
        globalLetterIdx++; // account for space delay

        return (
          <span key={wIdx} className="word-span" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {letters}
            {wIdx < words.length - 1 && <span className="word-space" style={{ display: "inline-block" }}>&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
};



// ─── Main Component ────────────────────────────────────────────────────
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
          <span className="hero-typed">{displayText}</span>
          <span className="typing-cursor" />
        </div>

        <p className="hero-desc">
          Passionate about bridging technology and business through
          data-driven insights, analytical thinking, and smart system design.
        </p>

        <div className="hero-btns">
          <a href="#portfolio" className="hero-btn">View My Projects</a>
          <a href={cvDocument} download="Dulanjana_Rathanayaka_Resume.pdf" className="hero-btn hero-btn-outline">Download Resume</a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="hero-photo-wrapper">
          <div className="hero-photo-circle">
            <div className="glare"></div>
            <img src={profilePhoto} alt={name} className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = { name: "" };
Home.propTypes = { name: PropTypes.string.isRequired };
export default Home;
