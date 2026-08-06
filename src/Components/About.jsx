import React, { useEffect } from "react";
import profilePhoto from "../images/dulanjana.jpg";

const technicalSkills = [
  { category: "Systems & Business Analysis", items: ["UML", "ERD", "BPMN", "Requirements Engineering", "Process Modeling"] },
  { category: "Data Science & Tools", items: ["Data Analysis", "Power BI", "Excel", "Jupyter", "SQL"] },
  { category: "Languages", items: ["JavaScript", "Python", "Java", "HTML/CSS"] },
  { category: "Frameworks & Databases", items: ["React.js", "Node.js", "Spring Boot", "MySQL", "MongoDB"] }
];

const softSkills = [
  "Critical Thinking", "Problem Solving", "Effective Communication", 
  "Team Collaboration", "Agile Methodologies", "Project Management"
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

        {/* Technical Stack Grid */}
        <div className="about-card tech-card glass-panel reveal-right">
          <h3>Technical Arsenal</h3>
          <p className="tech-subtitle">Technologies and tools I work with daily</p>
          
          <div className="tech-groups">
            {technicalSkills.map((skillGroup, idx) => (
              <div className="tech-group" key={idx}>
                <div className="tech-group-title">{skillGroup.category}</div>
                <div className="tech-pills">
                  {skillGroup.items.map(item => (
                    <span className="tech-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Philosophy */}
        <div className="about-card bottom-card glass-panel reveal-up">
          <div className="soft-skills-section">
            <h3>Professional Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, idx) => (
                <div className="soft-skill-item" key={idx}>
                  <div className="ss-dot"></div>
                  <span>{skill}</span>
                </div>
              ))}
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

      </div>
    </section>
  );
};

export default About;
