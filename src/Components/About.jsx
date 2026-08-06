import React, { useEffect } from "react";
import profilePhoto from "../images/dulanjana.jpg";

const skillCategories = [
  {
    title: "BUSINESS ANALYSIS (BA)",
    skills: ["Requirements Gathering", "Stakeholder Management", "Process Modeling", "BPMN", "Agile/Scrum", "User Research", "Risk Assessment"]
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
      <div className="about-header reveal-up">
        <div className="sec-label">Discover</div>
        <h2 className="sec-title">ABOUT <span>ME</span></h2>
      </div>

      <div className="about-container">
        
        {/* Bio & Intro Card */}
        <div className="about-card intro-card glass-panel reveal-left">
          <div className="intro-content">
            <h3>Hello! I'm Dulanjana Rathnayaka</h3>
            <h4 className="intro-subtitle">Information Systems Engineering Undergraduate at SLIIT</h4>
            
            <p>
              I am an aspiring <strong>Business Analyst (BA)</strong> and <strong>Systems Analyst (SA)</strong> based in Malabe, Sri Lanka. 
              While my primary focus lies in bridging the gap between business needs and technical solutions, I also have a strong secondary interest in <strong>Data Analysis (DA)</strong>.
            </p>
            <p>
              My journey is rooted in understanding complex business requirements, process modeling, and designing scalable system architectures. 
              Because I possess practical hands-on experience in <strong>Full Stack Development</strong> and <strong>Data Science</strong>, 
              I am uniquely positioned to communicate effectively with technical teams and ensure that technology investments deliver real business value.
            </p>
            <p>
              I thrive on transforming chaotic workflows into streamlined processes, and leveraging data to drive smart, actionable decisions.
            </p>

            <div className="personal-details">
              <div className="pd-item">
                <span className="pd-label">Education:</span>
                <span className="pd-value">BSc (Hons) IT - SLIIT</span>
              </div>
              <div className="pd-item">
                <span className="pd-label">Location:</span>
                <span className="pd-value">Malabe, Sri Lanka</span>
              </div>
              <div className="pd-item">
                <span className="pd-label">Interests:</span>
                <span className="pd-value">Data Analytics, System Design, Automation</span>
              </div>
            </div>
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
