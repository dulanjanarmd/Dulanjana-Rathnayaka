import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";
import cvDocument from "../documents/Dulanjana_Rathnayaka_CV.docx";

const ROLES = ["BUSINESS ANALYST", "DATA ANALYST", "SYSTEM ANALYST"];

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

// ─── Canvas Particle Network ───────────────────────────────────────────
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W, H, particles;
    const NUM = 80;
    const MAX_DIST = 140;
    const MOUSE_RADIUS = 120;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const mkParticle = () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.5 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: NUM }, mkParticle);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.current.x = -9999; mouse.current.y = -9999; };

    window.addEventListener("resize", init);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.parentElement.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    init();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
        }

        // Velocity damping
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const opacity = (1 - d / MAX_DIST) * 0.07;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", init);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
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
      <ParticleCanvas />

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

        <div className="hero-btns">
          <a href="#portfolio" className="hero-btn">View My Projects</a>
          <a href={cvDocument} download="Dulanjana_Rathnayaka_CV.docx" className="hero-btn hero-btn-outline">Download Resume</a>
        </div>
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
