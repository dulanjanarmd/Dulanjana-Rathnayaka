import React, { useEffect } from "react";
import profilePhoto from "../images/dulanjana.jpg";

const skillCategories = [
  {
    title: "BUSINESS ANALYSIS",
    skills: ["Requirements Elicitation", "Stakeholder Management", "Business Process Analysis", "Gap Analysis"]
  },
  {
    title: "REQUIREMENTS & MODELLING",
    skills: ["User Stories & AC", "UML & BPMN", "Wireframing", "Test Cases"]
  },
  {
    title: "PROJECT MANAGEMENT",
    skills: ["Agile Scrum", "Sprint Planning", "Risk Management"]
  },
  {
    title: "DATA & TECHNICAL",
    skills: ["SQL & MySQL", "Power BI", "Java & Spring Boot", "REST APIs", "Python"]
  },
  {
    title: "TOOLS",
    skills: ["Jira", "Figma", "Lucidchart", "GitHub"]
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
            <h4 className="intro-subtitle">Business Analyst | Information Systems Engineering Undergraduate at SLIIT</h4>
            
            <p>
              I am a third-year <strong>Information Systems Engineering</strong> undergraduate at SLIIT, actively seeking a <strong>Business Analyst</strong> internship. I specialize in bridging the gap between business objectives and technical implementation by translating complex needs into structured requirements and scalable system solutions.
            </p>
            <p>
              With hands-on experience as a Product Owner and Agile Scrum team lead for a client-facing healthcare system, my expertise spans requirements analysis, stakeholder management, and Agile delivery—backed by a strong technical foundation in SQL, Power BI, and system design.
            </p>

            <div className="personal-details">
              <div className="pd-item">
                <span className="pd-label">Education:</span>
                <span className="pd-value">BSc (Hons) in Information Systems Engineering – SLIIT</span>
              </div>
              <div className="pd-item">
                <span className="pd-label">Location:</span>
                <span className="pd-value">Malabe, Sri Lanka</span>
              </div>
              <div className="pd-item">
                <span className="pd-label">Interests:</span>
                <span className="pd-value">Business Analysis &middot; Systems Analysis</span>
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
