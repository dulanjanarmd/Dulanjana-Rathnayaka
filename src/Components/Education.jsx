import React, { useEffect } from "react";
import saranathLogo from "../images/saranath.jpg";
import stJosephLogo from "../images/stjoseph.jpg";
import sliitLogo from "../images/sliit.png";

const educationData = [
  {
    id: 1,
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    specialization: "Information Systems Engineering",
    period: "Oct 2024 - Jun 2028",
    image: sliitLogo,
    badgeText: "SLIIT",
    description: "Currently in Year 3, Semester 1 | GPA: 3.11/4.0. Pursuing my undergraduate degree focusing on systems engineering, data analysis, and business analysis methodologies.",
  },
  {
    id: 2,
    school: "Saranath College, Kuliyapitiya",
    degree: "G.C.E. Advanced Level (A/L)",
    specialization: "Biological Science Stream",
    period: "Completed",
    image: saranathLogo,
    coverImage: true,
    badgeText: "SC",
    description: "Successfully completed Advanced Level examinations.",
  },
  {
    id: 3,
    school: "St. Joseph's College, Kuliyapitiya",
    degree: "G.C.E. Ordinary Level (O/L)",
    specialization: "Secondary Education",
    period: "Completed",
    image: stJosephLogo,
    badgeText: "SJC",
    description: "Successfully completed Ordinary Level examinations with excellent academic performance.",
  },
];

const Education = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".education-section .reveal, .education-section .reveal-up, .education-section .reveal-left, .education-section .reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education-section">
      {/* Blueprint background lines */}
      <div className="edu-bg-lines" aria-hidden="true">
        <div className="edu-line edu-line-1" />
        <div className="edu-line edu-line-2" />
        <div className="edu-line edu-line-3" />
        <div className="edu-line edu-line-4" />
        <div className="edu-line edu-line-5" />
      </div>

      <div className="edu-header reveal">
        <div className="sec-label">Education</div>
        <h2 className="sec-title">ACADEMIC <span>JOURNEY</span></h2>
      </div>
      
      <div className="education-timeline reveal">
        {educationData.map((item, index) => (
          <div className="education-card" key={item.id}>
            <div className="edu-image-wrapper">
              <img src={item.image} alt={item.school} className={`edu-logo ${item.coverImage ? 'edu-logo-cover' : ''}`} />
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
