import React, { useEffect } from "react";

const certificatesData = [
  {
    id: 1,
    title: "IBM Business Analyst Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    link: "#",
    image: "https://via.placeholder.com/400x250/1a1a1a/60a5fa?text=IBM+Business+Analyst"
  },
  {
    id: 2,
    title: "IBM Data Analyst Professional Certificate",
    issuer: "Coursera",
    date: "2024",
    link: "#",
    image: "https://via.placeholder.com/400x250/1a1a1a/60a5fa?text=IBM+Data+Analyst"
  }
];

const Certificates = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("card-visible");
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".cert-card, .reveal-up").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" className="certificates-section">
      <div className="edu-header reveal-up">
        <div className="sec-label">Achievements</div>
        <h2 className="sec-title">MY <span>CERTIFICATES</span></h2>
      </div>
      
      <div className="cert-grid">
        {certificatesData.map(cert => (
          <div key={cert.id} className="cert-card">
            <div className="cert-img-wrapper">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-date">{cert.date}</div>
              <div className="cert-actions">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-btn">
                  View Credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
