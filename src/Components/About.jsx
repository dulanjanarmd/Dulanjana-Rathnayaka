import React, { useEffect } from "react";
import profilePhoto from "../images/dulanjana.jpg";

const skillCategories = [
  {
    title: "BUSINESS ANALYSIS (BA)",
    skills: ["Requirements Gathering", "Stakeholder Management", "Process Modeling", "BPMN", "Agile/Scrum", "User Research", "Risk Assessment", "Use Case Modeling", "SWOT Analysis", "Gap Analysis", "UAT", "Jira/Confluence"]
  },
  {
    title: "DATA ANALYSIS (DA)",
    skills: ["Data Modeling", "SQL", "Power BI", "Excel", "Data Visualization", "Statistical Analysis", "A/B Testing"]
  },
  {
    title: "SYSTEMS ANALYSIS (SA)",
    skills: ["System Architecture", "UML", "ERD", "API Design", "Systems Integration", "Technical Documentation"]
  },
  {
    title: "TECHNICAL SKILLS",
    skills: ["JavaScript/TypeScript", "React/Next.js", "Node.js/Express", "Python", "Java", "MySQL", "MongoDB", "Spring Boot"]
  },
  {
    title: "SOFT SKILLS",
    skills: ["Critical Thinking", "Problem-Solving", "Effective Communication", "Team Collaboration", "Project Management", "Leadership"]
  }
];

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="modern-about">
      {/* Ambient orb backgrounds */}
      <div className="about-orb about-orb-1" aria-hidden="true" />
      <div className="about-orb about-orb-2" aria-hidden="true" />
      <div className="about-orb about-orb-3" aria-hidden="true" />

      <div className="about-header reveal-up">
        <div className="sec-label">Discover</div>
        <h2 className="sec-title">ABOUT <span>ME</span></h2>
      </div>

      <div className="about-container">
        
        {/* Bio & Intro Card */}
        <div className="about-card intro-card glass-panel reveal-left">
          <div className="intro-content">
            <h3>Hello! I'm Dulanjana Rathnayaka</h3>
            <h4 className="intro-subtitle">Aspiring Business Analyst | Information Systems Engineering Undergraduate at SLIIT</h4>
            
            <p>
              I am an aspiring <strong>Business Analyst (BA)</strong> with a strong secondary focus on <strong>Systems Analysis (SA)</strong> and <strong>Data Analysis (DA)</strong>. Based in Malabe, Sri Lanka, I am passionate about bridging the gap between business needs and technical solutions — turning complex problems into clear, actionable strategies that deliver real value.
            </p>
            <p>
              My academic and practical journey is rooted in understanding complex business requirements, process modeling, and designing scalable system architectures. Through hands-on experience in Full Stack Development and Data Science, I have developed the ability to communicate effectively with both business stakeholders and technical teams. This unique combination allows me to ensure that technology investments are aligned with business goals and deliver measurable outcomes.
            </p>
            <p>
              I thrive on transforming chaotic, inefficient workflows into streamlined, data-driven processes. Whether it’s gathering and analyzing requirements, modeling business processes, or leveraging data to support smarter decision-making, I am driven by the goal of creating solutions that are both practical and impactful.
            </p>

            <div className="personal-details">
              <div className="pd-item">
                <span className="pd-label">Education:</span>
                <span className="pd-value">BSc (Hons) in Information Technology Specialising in Information Systems Engineering – SLIIT</span>
              </div>
              <div className="pd-item">
                <span className="pd-label">Location:</span>
                <span className="pd-value">Malabe, Sri Lanka</span>
              </div>
              <div className="pd-item">
                <span className="pd-label">Interests:</span>
                <span className="pd-value">Business Analysis &middot; Systems Analysis &middot; Data Analysis</span>
              </div>
            </div>
          </div>

          <div className="philosophy-section">
            <h3>My Philosophy</h3>
            <p>
              "Technology is only as good as the business problem it solves." <br/>
              I aim to ensure that every system designed and every line of code written aligns perfectly 
              with overarching organizational goals and user needs.
            </p>
          </div>
        </div>

        {/* Skills Card */}
        <div className="about-card skills-card glass-panel reveal-right">
          <h3>Professional Skills</h3>
          <p className="tech-subtitle">Core competencies and technical arsenal</p>
          
          <div className="skills-list" style={{ marginTop: '2rem' }}>
            {skillCategories.map((category, index) => (
              <div className="skill-category" key={index}>
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-pill-container">
                  {category.skills.map((skill, i) => (
                    <span className="skill-pill-dark" key={i}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
