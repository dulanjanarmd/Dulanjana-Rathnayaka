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
    desc: "Connect with me professionally. View my academic background, skills, certifications, and career journey as an aspiring analyst.",
    url: "https://www.linkedin.com/in/dulanjanarmd",
  },
  {
    tag: "Coming Soon",
    title: "Data Analysis Projects",
    desc: "Data analysis and visualization projects built during my studies at SLIIT — dashboards, reports, and statistical models.",
    url: "https://github.com/dulanjanarmd",
  },
  {
    tag: "Coming Soon",
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
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="section">
      <div className="portfolio-header">
        <div className="reveal-left">
          <div className="section-label">My Work</div>
          <h2 className="section-title">Recent <span>Projects</span></h2>
          <div className="divider" />
        </div>
        <a
          href="https://github.com/dulanjanarmd"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline reveal-right"
        >
          View All →
        </a>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
