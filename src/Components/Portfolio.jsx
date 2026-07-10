import React, { useEffect } from "react";

const projectList = [
  {
    icon: "🐙",
    title: "GitHub Profile",
    description:
      "Explore my repositories, open source contributions, and coding projects related to information systems and data analysis.",
    url: "https://github.com/dulanjanarmd",
  },
  {
    icon: "💼",
    title: "LinkedIn Profile",
    description:
      "Connect with me professionally. View my academic background, skills, certifications, and career journey.",
    url: "https://www.linkedin.com/in/dulanjanarmd",
  },
  {
    icon: "📊",
    title: "Data Analysis Projects",
    description:
      "Coming soon — data analysis and visualization projects built during my studies at SLIIT.",
    url: "https://github.com/dulanjanarmd",
  },
  {
    icon: "🏗️",
    title: "System Design Work",
    description:
      "Coming soon — system analysis and design artifacts including UML diagrams, ERDs, and process models.",
    url: "https://github.com/dulanjanarmd",
  },
];

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio">
      <div className="section-header reveal">
        <div className="section-tag">Portfolio</div>
        <h2 className="section-title">
          My <span>Work</span>
        </h2>
      </div>

      <div className="portfolio-grid">
        {projectList.map((project, i) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
