import React, { useEffect } from "react";

const projects = [
  {
    tag: "GitHub",
    title: "GitHub Profile",
    desc: "Explore my repositories, open source contributions, and coding projects related to information systems and data analysis.",
    url: "https://github.com/dulanjanarmd",
  },
  {
    tag: "LinkedIn",
    title: "LinkedIn Profile",
    desc: "Connect with me professionally. View my academic background, skills, certifications, and career journey.",
    url: "https://www.linkedin.com/in/dulanjanarmd",
  },
  {
    tag: "Academic",
    title: "Data Analysis Projects",
    desc: "Data analysis and visualization projects built during my studies at SLIIT — dashboards, reports, and statistical models.",
    url: "https://github.com/dulanjanarmd",
  },
  {
    tag: "Academic",
    title: "System Design Work",
    desc: "System analysis and design artifacts including UML diagrams, ERDs, DFDs, and process models from academic projects.",
    url: "https://github.com/dulanjanarmd",
  },
];

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio">
      <div className="port-top">
        <div className="reveal-left">
          <div className="sec-label">My Work</div>
          <h2 className="sec-title">RECENT <span>PROJECTS</span></h2>
        </div>
        <a href="https://github.com/dulanjanarmd" target="_blank" rel="noopener noreferrer"
          className="hero-btn reveal-right" style={{ animation: "none", opacity: 1 }}>
          View All →
        </a>
      </div>
      <div className="port-grid">
        {projects.map((p, i) => (
          <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
            className="proj-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="proj-tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="proj-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
