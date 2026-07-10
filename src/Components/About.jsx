import React, { useEffect } from "react";

const description =
  "I'm an undergraduate at Sri Lanka Institute of Information Technology (SLIIT), pursuing a BSc(Hons) in Information Technology specialized in Information Systems Engineering. Passionate about turning data and systems into meaningful business solutions.";

const skillsList = [
  "Business Analysis",
  "Data Analysis",
  "Systems Analysis",
  "Information Systems",
  "Database Management",
  "Requirements Engineering",
  "Process Modeling",
  "Problem Solving",
];

const detailOrQuote =
  "Aspiring Business Analyst, Data Analyst, and System Analyst with a strong foundation in Information Systems Engineering. I bridge the gap between technology and business to deliver impactful, data-driven solutions.";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-header reveal">
        <div className="section-tag">About Me</div>
        <h2 className="section-title">
          Who <span>I Am</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-card reveal-left">
          <h3>🎓 Education</h3>
          <p>
            <strong style={{ color: "#e2e8f0" }}>BSc(Hons) Information Technology</strong>
            <br />
            Specialized in Information Systems Engineering
            <br />
            <span style={{ color: "#6c63ff", fontWeight: 600 }}>SLIIT — Sri Lanka</span>
          </p>
          <div className="stat-row">
            <div className="stat-box">
              <div className="num">ISE</div>
              <div className="label">Specialization</div>
            </div>
            <div className="stat-box">
              <div className="num">IT</div>
              <div className="label">BSc(Hons)</div>
            </div>
          </div>
          <p style={{ marginTop: "1.5rem" }}>{detailOrQuote}</p>
        </div>

        <div className="about-card reveal-right">
          <h3>⚡ Skills & Interests</h3>
          <p>{description}</p>
          <div className="skills-grid" style={{ marginTop: "1.5rem" }}>
            {skillsList.map((skill) => (
              <div className="skill-chip" key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
