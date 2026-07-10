import React, { useEffect } from "react";

const skills = [
  { name: "Business Analysis", pct: 85 },
  { name: "Data Analysis", pct: 80 },
  { name: "Systems Analysis", pct: 78 },
  { name: "Database Management", pct: 75 },
  { name: "Requirements Engineering", pct: 82 },
  { name: "Process Modeling", pct: 70 },
];

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          document.querySelectorAll(".skill-fill").forEach(b => {
            b.style.width = b.dataset.pct + "%";
          });
        }
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="about-inner">
        <div className="reveal-left">
          <div className="sec-label">About Me</div>
          <h2 className="sec-title">WHO I <span>AM</span></h2>
          <p className="about-text">
            I&apos;m Dulanjana Rathnayaka, an undergraduate at Sri Lanka Institute of
            Information Technology (SLIIT) pursuing a BSc(Hons) in Information Technology
            specialized in Information Systems Engineering.
          </p>
          <p className="about-text">
            My goal is to bridge the gap between technology and business as a Business
            Analyst, Data Analyst, or System Analyst — delivering impactful, data-driven solutions.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <div className="d-label">Degree</div>
              <div className="d-val">BSc(Hons) IT</div>
            </div>
            <div className="detail-item">
              <div className="d-label">University</div>
              <div className="d-val">SLIIT</div>
            </div>
            <div className="detail-item">
              <div className="d-label">Specialization</div>
              <div className="d-val">ISE</div>
            </div>
            <div className="detail-item">
              <div className="d-label">Location</div>
              <div className="d-val">Sri Lanka</div>
            </div>
            <div className="detail-item">
              <div className="d-label">Email</div>
              <div className="d-val">dulanjanarmd@gmail.com</div>
            </div>
            <div className="detail-item">
              <div className="d-label">Status</div>
              <div className="d-val" style={{ color: "#aaa" }}>Open to Work</div>
            </div>
          </div>
        </div>

        <div className="reveal-right">
          <div className="sec-label">My Skills</div>
          {skills.map(s => (
            <div className="skill-wrap" key={s.name}>
              <div className="skill-top">
                <span>{s.name}</span>
                <span>{s.pct}%</span>
              </div>
              <div className="skill-bg">
                <div className="skill-fill" data-pct={s.pct} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
