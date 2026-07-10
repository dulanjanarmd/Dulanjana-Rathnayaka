import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import instagramIcon from "../images/socials/instagram.svg";

const ROLES = ["Business Analyst", "Data Analyst", "System Analyst", "IT Undergraduate"];

const Home = ({ name }) => {
  const canvasRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
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

  // Canvas: particles + neural connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, frame = 0;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Matrix rain
    const fs = 12;
    const chars = "01アイウエオ∑∆∇∂∫≈≠∞ABCDEF";
    let cols = Math.floor(canvas.width / fs);
    let drops = Array(cols).fill(0).map(() => Math.random() * -80);

    const draw = () => {
      frame++;
      cols = Math.floor(canvas.width / fs);
      if (drops.length !== cols) drops = Array(cols).fill(0).map(() => Math.random() * -80);

      ctx.fillStyle = "rgba(10,10,10,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix rain (subtle)
      ctx.font = `${fs}px monospace`;
      drops.forEach((y, i) => {
        ctx.fillStyle = "rgba(108,99,255,0.35)";
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
        if (y * fs > canvas.height && Math.random() > 0.978) drops[i] = 0;
        drops[i] += 0.35;
      });

      // Neural nodes
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.pulse += 0.025;
        const g = Math.sin(n.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${g * 0.7})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${(1 - d / 140) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Scan line
      const sy = (frame * 1.5) % canvas.height;
      const sg = ctx.createLinearGradient(0, sy - 30, 0, sy + 30);
      sg.addColorStop(0, "rgba(108,99,255,0)");
      sg.addColorStop(0.5, "rgba(108,99,255,0.025)");
      sg.addColorStop(1, "rgba(108,99,255,0)");
      ctx.fillStyle = sg;
      ctx.fillRect(0, sy - 30, canvas.width, 60);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  // Cursor glow
  useEffect(() => {
    const el = document.querySelector(".cursor-glow");
    if (!el) return;
    const fn = e => { el.style.left = e.clientX + "px"; el.style.top = e.clientY + "px"; };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="bg-canvas" />
      <div className="cursor-glow" />
      <section id="home">
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-greeting">Hello, I&apos;m</div>
            <h1 className="hero-name">
              {name.split(" ")[0]}<br />
              <span className="accent">{name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <div className="hero-role">
              Aspiring <span className="typed">{displayText}</span>
              <span className="typing-cursor" />
            </div>
            <p className="hero-desc">
              BSc(Hons) IT undergraduate at SLIIT, specialized in Information Systems Engineering.
              Passionate about bridging technology and business through data-driven insights.
            </p>
            <div className="hero-btns">
              <a href="#portfolio" className="btn-primary">View My Work →</a>
              <a href="#footer" className="btn-outline">Contact Me</a>
            </div>
            <div className="hero-socials">
              <span>Follow me</span>
              <a href="https://github.com/dulanjanarmd" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <img src={gitHubIcon} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/dulanjanarmd" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/dulanjanarmd" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="hero-photo-bg" />
            <img src={profilePhoto} alt="Dulanjana Rathnayaka" className="hero-photo" />
            <div className="hero-exp-badge">
              <div className="num">SLIIT</div>
              <div className="lbl">Undergraduate</div>
            </div>
            <div className="hero-uni-badge">
              ISE Specialized
              <span>Info Systems Engineering</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

Home.defaultProps = { name: "" };
Home.propTypes = { name: PropTypes.string.isRequired };
export default Home;
