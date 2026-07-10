import React, { useEffect, useRef } from "react";

const skills = [
  { name: "Business Analysis", pct: 85 },
  { name: "Data Analysis", pct: 80 },
  { name: "Systems Analysis", pct: 78 },
  { name: "Database Management", pct: 75 },
  { name: "Requirements Engineering", pct: 82 },
  { name: "Process Modeling", pct: 70 },
];

const About = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          // animate skill bars
          document.querySelectorAll(".skill-bar-fill").forEach(bar => {
            bar.style.width = bar.dataset.pct + "%";
          });
        }
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="about-inner">

        {/* LEFT */}
        <div className="about-left reveal-left">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="divider" />
          <p className="about-text">
            I&apos;m Dulanjana Rathnayaka, an undergraduate at Sri Lanka Institute of
            Information Technology (SLIIT) pursuing a BSc(Hons) in Information Technology
            specialized in Information Systems Engineering.
          </p>
          <p className="about-text">
            I am passionate about transforming complex data and systems into meaningful
            business solutions. My goal is to bridge the gap between technology and
            business as a Business Analyst, Data Analyst, or System Analyst.
          </p>

          <div className="about-info">
            <div className="about-info-item">
              <div className="info-label">Degree</div>
              <div className="info-val">BSc(Hons) IT</div>
            </div>
            <div className="about-info-item">
              <div className="info-label">University</div>
              <div className="info-val">SLIIT</div>
            </div>
            <div className="about-info-item">
              <div className="info-label">Specialization</div>
              <div className="info-val">ISE</div>
            </div>
            <div className="about-info-item">
              <div className="info-label">Location</div>
              <div className="info-val">Sri Lanka</div>
            </div>
            <div className="about-info-item">
              <div className="info-label">Email</div>
              <div className="info-val">dulanjanarmd@gmail.com</div>
            </div>
            <div className="about-info-item">
              <div className="info-label">Status</div>
              <div className="info-val" style={{ color: "#00ff96" }}>Open to Work</div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">3+</div>
              <div className="stat-lbl">Years Study</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-lbl">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">6+</div>
              <div className="stat-lbl">Skills</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right reveal-right">
          <div className="skills-title">My Skills</div>
          {skills.map(s => (
            <div className="skill-bar-wrap" key={s.name}>
              <div className="skill-bar-top">
                <span>{s.name}</span>
                <span>{s.pct}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  data-pct={s.pct}
                  ref={el => barsRef.current.push(el)}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
