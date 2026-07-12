import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg";

const ROLES = ["BUSINESS ANALYST", "DATA ANALYST", "SYSTEM ANALYST"];

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
  const canvasRef = useRef(null);
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

  // Advanced canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, frame = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Particles ---
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.5 + 0.5,
    }));

    // --- Geometric rings ---
    const rings = Array.from({ length: 4 }, (_, i) => ({
      x: canvas.width * 0.75,
      y: canvas.height * 0.5,
      radius: 120 + i * 80,
      speed: 0.003 + i * 0.001,
      offset: (i * Math.PI) / 2,
      dashLen: 6 + i * 4,
      gap: 10 + i * 6,
    }));

    // --- Wave lines ---
    const waves = Array.from({ length: 3 }, (_, i) => ({
      amp: 18 + i * 10,
      freq: 0.008 - i * 0.002,
      speed: 0.012 + i * 0.005,
      phase: (i * Math.PI * 2) / 3,
      alpha: 0.06 - i * 0.015,
    }));

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Wave lines ──
      waves.forEach(w => {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 3) {
          const y = canvas.height * 0.5
            + Math.sin(x * w.freq + frame * w.speed + w.phase) * w.amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255,255,255,${w.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // ── Rotating dashed rings ──
      rings.forEach(ring => {
        ctx.save();
        ctx.translate(ring.x, ring.y);
        ctx.rotate(frame * ring.speed + ring.offset);
        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        ctx.setLineDash([ring.dashLen, ring.gap]);
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // ── Particles + connections ──
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.25)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 130) * 0.07})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // ── Diagonal grid lines (subtle) ──
      if (frame % 3 === 0) {
        const spacing = 80;
        ctx.strokeStyle = "rgba(255,255,255,0.02)";
        ctx.lineWidth = 0.5;
        for (let x = -canvas.height; x < canvas.width + canvas.height; x += spacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x + canvas.height, canvas.height);
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home">
      <canvas ref={canvasRef} id="bg-canvas" />

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
          <a href="/cv/dulanjana-rathnayaka-cv.pdf" download className="hero-btn hero-btn-outline">Download CV</a>
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
