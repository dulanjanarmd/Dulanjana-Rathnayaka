import React, { useEffect } from "react";

const skills = [
  { name: "Business Analysis",        pct: 85 },
  { name: "Data Analysis",            pct: 80 },
  { name: "Systems Analysis",         pct: 78 },
  { name: "Requirements Engineering", pct: 82 },
  { name: "Database Management",      pct: 75 },
  { name: "Process Modeling (UML/ERD)",pct: 72 },
];

const tools = [
  "Microsoft Excel", "Power BI", "SQL", "Python",
  "Figma", "Draw.io", "Lucidchart", "MS Visio",
  "GitHub", "Jira", "Trello", "Google Analytics",
];

const softSkills = [
  { icon: "🧠", label: "Critical Thinking" },
  { icon: "💬", label: "Communication" },
  { icon: "🤝", label: "Team Collaboration" },
  { icon: "🔍", label: "Problem Solving" },
  { icon: "📋", label: "Project Management" },
  { icon: "🎯", label: "Attention to Detail" },
];

const interests = [
  { icon: "📊", label: "Data Visualization" },
  { icon: "🏗️", label: "System Design" },
  { icon: "💡", label: "Business Strategy" },
  { icon: "🤖", label: "AI & Automation" },
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
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">

      {/* ── ROW 1: Bio + Skills ── */}
      <div className="about-inner">

        {/* LEFT — Bio */}
        <div className="reveal-left">
          <div className="sec-label">About Me</div>
          <h2 className="sec-title">WHO I <span>AM</span></h2>

          <p className="about-text">
            I&apos;m <strong style={{ color: "#fff" }}>Dulanjana Rathnayaka</strong>, an
            undergraduate at Sri Lanka Institute of Information Technology (SLIIT)
            pursuing a <strong style={{ color: "#fff" }}>BSc(Hons) in Information Technology</strong>,
            specialized in <strong style={{ color: "#fff" }}>Information Systems Engineering</strong>.
          </p>
          <p className="about-text">
            I am passionate about transforming complex business problems into clear,
            data-driven solutions. My focus lies in understanding stakeholder needs,
            modeling systems, and delivering insights that drive smarter decisions.
          </p>
          <p className="about-text">
            I thrive at the intersection of technology and business — whether that means
            gathering requirements, designing workflows, analyzing datasets, or building
            system models that align with organizational goals.
          </p>

          {/* Personal details grid */}
          <div className="about-details">
            {[
              { label: "Degree",         val: "BSc(Hons) IT" },
              { label: "University",     val: "SLIIT, Sri Lanka" },
              { label: "Specialization", val: "Information Systems Engineering" },
              { label: "Year",           val: "Undergraduate" },
              { label: "Email",          val: "dulanjanarmd@gmail.com" },
              { label: "Location",       val: "Sri Lanka" },
              { label: "Languages",      val: "Sinhala, English" },
              { label: "Status",         val: "Open to Work ✓" },
            ].map(d => (
              <div className="detail-item" key={d.label}>
                <div className="d-label">{d.label}</div>
                <div className="d-val">{d.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Skill bars */}
        <div className="reveal-right">
          <div className="sec-label">Technical Skills</div>
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

          {/* Tools */}
          <div className="about-tools-wrap reveal">
            <div className="sec-label" style={{ marginTop: "2.5rem" }}>Tools & Technologies</div>
            <div className="about-tools">
              {tools.map(t => (
                <span className="tool-chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ROW 2: Soft Skills + Interests ── */}
      <div className="about-bottom reveal">
        <div className="about-bottom-col">
          <div className="sec-label">Soft Skills</div>
          <div className="soft-grid">
            {softSkills.map(s => (
              <div className="soft-card" key={s.label}>
                <span className="soft-icon">{s.icon}</span>
                <span className="soft-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-bottom-col">
          <div className="sec-label">Interests</div>
          <div className="soft-grid">
            {interests.map(i => (
              <div className="soft-card" key={i.label}>
                <span className="soft-icon">{i.icon}</span>
                <span className="soft-label">{i.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-bottom-col">
          <div className="sec-label">Career Goals</div>
          <p className="about-text" style={{ marginBottom: "1rem" }}>
            My ambition is to grow into a senior-level <strong style={{ color: "#fff" }}>Business Analyst</strong> or
            <strong style={{ color: "#fff" }}> Data Analyst</strong> role, contributing to
            organizations that value data-driven decision making and continuous improvement.
          </p>
          <p className="about-text">
            I aim to bridge the gap between technical teams and business stakeholders,
            ensuring technology investments deliver real, measurable value.
          </p>
        </div>
      </div>

    </section>
  );
};

export default About;
