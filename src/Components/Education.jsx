import React from "react";
import saranathLogo from "../images/saranath.jpg";
import stJosephLogo from "../images/stjoseph.jpg";
import sliitLogo from "../images/sliit.png";

const educationData = [
  {
    id: 1,
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    specialization: "Information Systems Engineering",
    period: "Present",
    badgeText: "SLIIT",
    description: "Currently pursuing my undergraduate degree, focusing on systems engineering, data analysis, and business analysis methodologies.",
  },
  {
    id: 2,
    school: "Saranath College, Kuliyapitiya",
    degree: "G.C.E. Advanced Level (A/L)",
    specialization: "Physical Science Stream",
    period: "Completed",
    badgeText: "SC",
    description: "Successfully completed Advanced Level examinations.",
  },
  {
    id: 3,
    school: "St. Joseph's College, Kuliyapitiya",
    degree: "G.C.E. Ordinary Level (O/L)",
    specialization: "Secondary Education",
    period: "Completed",
    badgeText: "SJC",
    description: "Successfully completed Ordinary Level examinations with excellent academic performance.",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="edu-header reveal">
        <div className="sec-label">Education</div>
        <h2 className="sec-title">ACADEMIC <span>JOURNEY</span></h2>
      </div>
      
      <div className="education-timeline reveal">
        {educationData.map((item, index) => (
          <div className="education-card" key={item.id}>
            <div className="edu-image-wrapper">
              <span className="edu-badge">{item.badgeText}</span>
            </div>
            <div className="edu-content">
              <h3 className="edu-school">{item.school}</h3>
              <h4 className="edu-degree">{item.degree}</h4>
              {item.specialization && <span className="edu-specialization">{item.specialization}</span>}
              <div className="edu-period">{item.period}</div>
              <p className="edu-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
