import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";
import cvDocument from "../documents/Dulanjana_Rathanayaka_Resume.pdf";

const ROLES = ["BUSINESS ANALYST", "SYSTEMS ANALYST"];



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
          <span className="name-line hero-greeting">
            {"HI, I'M".split("").map((ch, idx) => (
              <span key={idx} className="letter" style={{ animationDelay: `${idx * 0.04}s` }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
          <span className="name-line name-full">
            {"DULANJANA RATHNAYAKA".split("").map((ch, idx) => (
              <span key={idx} className="letter" style={{ animationDelay: `${0.35 + idx * 0.035}s` }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        </h1>

        <div className={`hero-ise${nameVisible ? " hero-fade-in" : ""}`} style={{ animationDelay: "1.1s" }}>
          Information Systems Engineering Undergraduate at SLIIT
        </div>

        <div className={`hero-role-line${nameVisible ? " hero-fade-in" : ""}`} style={{ animationDelay: "1.25s" }}>
          <span className="hero-typed">{displayText}</span>
          <span className="typing-cursor" />
        </div>

        <p className={`hero-desc${nameVisible ? " hero-fade-in" : ""}`} style={{ animationDelay: "1.4s" }}>
          Specializing in translating complex business challenges into scalable digital solutions.
          Expertise in stakeholder management, requirements engineering, data modeling, and Agile product delivery.
        </p>

        <div className={`hero-btns${nameVisible ? " hero-fade-in" : ""}`} style={{ animationDelay: "1.55s" }}>
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
