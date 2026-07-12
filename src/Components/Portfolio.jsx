import React, { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    category: "Data Analysis",
    tag: "Academic",
    title: "Healthcare Appointment System Analysis",
    desc: "Conducted full business analysis for a healthcare appointment management system. Delivered BRD, use case diagrams, process flow models, and stakeholder requirement documentation.",
    tech: ["SQL", "Draw.io", "MS Visio", "Excel"],
    status: "Completed",
    year: "2024",
    url: "https://github.com/dulanjanarmd",
    featured: true,
  },
  {
    id: 2,
    category: "System Design",
    tag: "Academic",
    title: "Library Management System",
    desc: "Designed a complete information system for a university library. Produced ERD, DFD, UML class diagrams, and system architecture documentation.",
    tech: ["UML", "ERD", "Lucidchart", "MySQL"],
    status: "Completed",
    year: "2024",
    url: "https://github.com/dulanjanarmd",
    featured: false,
  },
  {
    id: 3,
    category: "Data Analysis",
    tag: "Academic",
    title: "Sales Data Dashboard",
    desc: "Built an interactive sales performance dashboard analyzing trends, KPIs, and forecasts using Excel and Power BI. Presented insights to stakeholders.",
    tech: ["Power BI", "Excel", "Python", "SQL"],
    status: "Completed",
    year: "2023",
    url: "https://github.com/dulanjanarmd",
    featured: false,
  },
  {
    id: 4,
    category: "Business Analysis",
    tag: "Academic",
    title: "E-Commerce Requirements Study",
    desc: "Performed requirements elicitation and analysis for an e-commerce platform. Delivered functional and non-functional requirements, user stories, and acceptance criteria.",
    tech: ["Jira", "Confluence", "Figma", "Excel"],
    status: "Completed",
    year: "2024",
    url: "https://github.com/dulanjanarmd",
    featured: false,
  },
  {
    id: 5,
    category: "System Design",
    tag: "Academic",
    title: "Student Information System",
    desc: "Analyzed and modeled a student information system for SLIIT. Produced full system documentation including data flow diagrams, entity relationships, and process models.",
    tech: ["UML", "DFD", "MySQL", "Draw.io"],
    status: "Completed",
    year: "2023",
    url: "https://github.com/dulanjanarmd",
    featured: false,
  },
  {
    id: 6,
    category: "Business Analysis",
    tag: "Personal",
    title: "Business Process Improvement Study",
    desc: "Identified inefficiencies in a small business workflow and proposed process improvements using BPMN modeling and gap analysis techniques.",
    tech: ["BPMN", "Lucidchart", "Excel", "Trello"],
    status: "In Progress",
    year: "2025",
    url: "https://github.com/dulanjanarmd",
    featured: false,
  },
];

const FILTERS = ["All", "Data Analysis", "System Design", "Business Analysis"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState([]);

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    setVisible([]);
    const t = setTimeout(() => {
      filtered.forEach((p, i) => {
        setTimeout(() => setVisible(v => [...v, p.id]), i * 80);
      });
    }, 50);
    return () => clearTimeout(t);
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = projects.find(p => p.featured);

  return (
    <section id="portfolio">

      {/* Header */}
      <div className="port-top">
        <div className="reveal-left">
          <div className="sec-label">My Work</div>
          <h2 className="sec-title">RECENT <span>PROJECTS</span></h2>
        </div>
        <a href="https://github.com/dulanjanarmd" target="_blank" rel="noopener noreferrer"
          className="hero-btn hero-btn-outline reveal-right">
          View All on GitHub ↗
        </a>
      </div>

      {/* Stats row */}
      <div className="port-stats reveal">
        {[
          { num: "6+", label: "Projects Completed" },
          { num: "3",  label: "Specializations" },
          { num: "12+", label: "Tools Used" },
          { num: "2+",  label: "Years Experience" },
        ].map(s => (
          <div className="port-stat" key={s.label}>
            <div className="port-stat-num">{s.num}</div>
            <div className="port-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Featured project */}
      {featured && (
        <div className="port-featured reveal">
          <div className="port-featured-badge">★ Featured Project</div>
          <div className="port-featured-inner">
            <div className="port-featured-left">
              <div className="proj-tag">{featured.category}</div>
              <h3 className="port-featured-title">{featured.title}</h3>
              <p className="port-featured-desc">{featured.desc}</p>
              <div className="proj-tech-row">
                {featured.tech.map(t => <span className="proj-tech" key={t}>{t}</span>)}
              </div>
            </div>
            <div className="port-featured-right">
              <div className="port-featured-meta">
                <div className="meta-item">
                  <span className="meta-label">Status</span>
                  <span className="meta-val status-done">{featured.status}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Year</span>
                  <span className="meta-val">{featured.year}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Category</span>
                  <span className="meta-val">{featured.category}</span>
                </div>
              </div>
              <a href={featured.url} target="_blank" rel="noopener noreferrer"
                className="hero-btn" style={{ marginTop: "2rem", animation: "none" }}>
                View Project ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Filter tabs */}
      <div className="port-filters reveal">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`port-filter${active === f ? " active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
            <span className="filter-count">
              {f === "All" ? projects.length : projects.filter(p => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="port-grid-adv">
        {filtered.filter(p => !p.featured || active !== "All").map(p => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`proj-card-adv${visible.includes(p.id) ? " card-visible" : ""}`}
          >
            <div className="proj-card-top">
              <span className="proj-tag">{p.category}</span>
              <span className={`proj-status ${p.status === "Completed" ? "status-done" : "status-wip"}`}>
                {p.status}
              </span>
            </div>
            <h3 className="proj-card-title">{p.title}</h3>
            <p className="proj-card-desc">{p.desc}</p>
            <div className="proj-tech-row">
              {p.tech.map(t => <span className="proj-tech" key={t}>{t}</span>)}
            </div>
            <div className="proj-card-footer">
              <span className="proj-year">{p.year}</span>
              <span className="proj-arrow-adv">↗</span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;
