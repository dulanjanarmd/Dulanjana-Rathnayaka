import React, { useEffect } from "react";

const services = [
  {
    icon: "📊",
    title: "Business Analysis",
    desc: "Analyzing business processes, identifying requirements, and delivering solutions that align technology with business goals.",
  },
  {
    icon: "🔍",
    title: "Data Analysis",
    desc: "Transforming raw data into actionable insights using analytical techniques, visualization, and statistical methods.",
  },
  {
    icon: "🏗️",
    title: "System Analysis",
    desc: "Designing and evaluating information systems to meet organizational needs through structured analysis and modeling.",
  },
  {
    icon: "🗄️",
    title: "Database Management",
    desc: "Designing relational databases, writing SQL queries, and managing data integrity for enterprise applications.",
  },
  {
    icon: "📋",
    title: "Requirements Engineering",
    desc: "Gathering, documenting, and managing stakeholder requirements to ensure successful project delivery.",
  },
  {
    icon: "🔄",
    title: "Process Modeling",
    desc: "Creating UML diagrams, ERDs, and process flow models to visualize and optimize business workflows.",
  },
];

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section">
      <div className="services-header reveal">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">My <span>Services</span></h2>
        <div className="divider" />
        <p className="section-sub">
          Specialized in bridging the gap between technology and business through
          analysis, design, and data-driven decision making.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div
            className="service-card reveal"
            key={s.title}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
