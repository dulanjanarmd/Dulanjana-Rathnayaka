import React, { useEffect } from "react";

const services = [
  { num: "01", title: "Business Analysis", desc: "Analyzing business processes, identifying requirements, and delivering solutions that align technology with business goals." },
  { num: "02", title: "Data Analysis", desc: "Transforming raw data into actionable insights using analytical techniques, visualization, and statistical methods." },
  { num: "03", title: "System Analysis", desc: "Designing and evaluating information systems to meet organizational needs through structured analysis and modeling." },
  { num: "04", title: "Database Management", desc: "Designing relational databases, writing SQL queries, and managing data integrity for enterprise applications." },
  { num: "05", title: "Requirements Engineering", desc: "Gathering, documenting, and managing stakeholder requirements to ensure successful project delivery." },
  { num: "06", title: "Process Modeling", desc: "Creating UML diagrams, ERDs, and process flow models to visualize and optimize business workflows." },
];

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services">
      <div className="services-top">
        <div className="reveal-left">
          <div className="sec-label">What I Do</div>
          <h2 className="sec-title">MY <span>SERVICES</span></h2>
        </div>
        <p className="reveal-right" style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "380px" }}>
          Specialized in bridging the gap between technology and business through
          analysis, design, and data-driven decision making.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="svc-card reveal" key={s.num} style={{ transitionDelay: `${i * 0.07}s` }}>
            <div className="svc-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
