import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import profilePhoto from "../images/dulanjana.jpg"; // eslint-disable-line

const ROLES = [
  "Business Analyst",
  "Data Analyst",
  "System Analyst",
  "IT Undergraduate",
];

const Home = ({ name, title }) => {
  const canvasRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // ── Typing effect ──
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 55 : 95;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
        else setCharIndex((c) => c + 1);
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % ROLES.length);
          setCharIndex(0);
        } else setCharIndex((c) => c - 1);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // ── Advanced canvas: Matrix rain + Neural nodes + Hex grid ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Matrix rain columns
    const fontSize = 13;
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ∑∆∇∂∫≈≠∞";
    let cols = Math.floor(canvas.width / fontSize);
    let drops = Array(cols).fill(0).map(() => Math.random() * -100);

    // Neural network nodes
    const nodes = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2.5 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Hex grid
    const hexSize = 40;
    const hexes = [];
    for (let row = 0; row < canvas.height / (hexSize * 1.5) + 2; row++) {
      for (let col = 0; col < canvas.width / (hexSize * Math.sqrt(3)) + 2; col++) {
        const x = col * hexSize * Math.sqrt(3) + (row % 2) * hexSize * (Math.sqrt(3) / 2);
        const y = row * hexSize * 1.5;
        hexes.push({ x, y, alpha: Math.random() * 0.06 + 0.01, phase: Math.random() * Math.PI * 2 });
      }
    }

    const drawHex = (x, y, size, alpha) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(0,212,255,${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const draw = () => {
      frame++;
      cols = Math.floor(canvas.width / fontSize);
      if (drops.length !== cols) drops = Array(cols).fill(0).map(() => Math.random() * -100);

      // Dark fade overlay
      ctx.fillStyle = "rgba(5,8,22,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── Hex grid ──
      hexes.forEach((h) => {
        const pulse = Math.sin(frame * 0.008 + h.phase) * 0.03 + h.alpha;
        drawHex(h.x, h.y, hexSize, Math.max(0, pulse));
      });

      // ── Matrix rain ──
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        // Head glow
        ctx.fillStyle = `rgba(0,255,200,0.9)`;
        ctx.fillText(char, x, y * fontSize);
        // Trail
        ctx.fillStyle = `rgba(0,180,120,0.25)`;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, (y - 1) * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      });

      // ── Neural nodes ──
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.pulse += 0.03;

        const glow = Math.sin(n.pulse) * 0.4 + 0.6;
        // Node glow ring
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6);
        grad.addColorStop(0, `rgba(108,99,255,${0.5 * glow})`);
        grad.addColorStop(1, "rgba(108,99,255,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${glow})`;
        ctx.fill();
      });

      // ── Neural connections ──
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.18;
            // Animated data pulse along line
            const progress = (frame * 0.01) % 1;
            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * progress;
            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * progress;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // Data pulse dot
            ctx.beginPath();
            ctx.arc(px, py, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,212,255,${alpha * 3})`;
            ctx.fill();
          }
        }
      }

      // ── Scan line effect ──
      const scanY = (frame * 2) % canvas.height;
      const scanGrad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      scanGrad.addColorStop(0, "rgba(0,212,255,0)");
      scanGrad.addColorStop(0.5, "rgba(0,212,255,0.03)");
      scanGrad.addColorStop(1, "rgba(0,212,255,0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 40, canvas.width, 80);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── Cursor glow ──
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");
    if (!glow) return;
    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="bg-canvas" />
      <div className="cursor-glow" />
      <section id="home">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="home-split">
          {/* ── LEFT: Text content ── */}
          <div className="home-content">
            <div className="home-badge">
              <span className="badge-dot" />
              Available for Opportunities
            </div>
            <h1 className="home-name">
              Hi, I&apos;m<br />
              <span className="gradient-text">{name}</span>
            </h1>
            <div className="home-role-line">
              <span className="role-prefix">Aspiring </span>
              <span className="role-text">{displayText}</span>
              <span className="typing-cursor" />
            </div>
            <p className="home-subtitle">
              BSc(Hons) IT · Information Systems Engineering<br />
              Sri Lanka Institute of Information Technology
            </p>

            {/* Tech stack badges */}
            <div className="tech-badges">
              {["Business Analysis", "Data Analytics", "System Design", "SQL", "Python"].map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>

            <div className="home-cta">
              <a href="#portfolio" className="btn-primary">
                <span>View My Work</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="#footer" className="btn-outline">Contact Me</a>
            </div>
          </div>

          {/* ── RIGHT: Photo with holographic frame ── */}
          <div className="home-photo-wrap">
            <div className="holo-ring holo-ring-1" />
            <div className="holo-ring holo-ring-2" />
            <div className="holo-ring holo-ring-3" />
            <div className="photo-hex-frame">
              <img src={profilePhoto} alt="Dulanjana Rathnayaka" className="profile-photo" />
            </div>
            {/* Floating tech labels */}
            <div className="float-label float-label-1">
              <span className="fl-dot" />
              SLIIT Undergraduate
            </div>
            <div className="float-label float-label-2">
              <span className="fl-dot" style={{ background: "#00d4ff" }} />
              ISE Specialized
            </div>
            <div className="float-label float-label-3">
              <span className="fl-dot" style={{ background: "#ff6584" }} />
              Aspiring Analyst
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  );
};

Home.defaultProps = { name: "", title: "" };
Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
