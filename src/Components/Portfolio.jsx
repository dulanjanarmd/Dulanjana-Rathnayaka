import React, { useEffect } from "react";
import rentlensImg from '../images/rentlens.png';
import libraryHubImg from '../images/libraryhub.png';
import novaBankImg from '../images/novabank.png';
import lankaThreadImg from '../images/lankathread.png';

const projects = [
  {
    id: 1,
    title: "LIBRARYHUB",
    category: "Business Process Improvement + Data Analytics",
    image: libraryHubImg,
    tech: ["Java", "Spring Boot", "MySQL", "React", "Chart.js", "UML"],
    desc: "Designed and developed an Online Library Management System focused on improving university library operations through process digitization and data-driven insights. The system supports real-world workflows for students, faculty, and librarians while providing management with actionable analytics.",
    outcomes: [
      "Digitized core library processes (issue, return, reservation, inventory)",
      "Built real-time dashboards tracking operational KPIs",
      "Enabled data-driven decisions through borrowing trends and usage reports",
      "Improved service efficiency and resource utilization for library staff and members"
    ],
    codeUrl: "https://github.com/dulanjanarmd/LibraryHub",
  },
  {
    id: 2,
    title: "RentLens",
    category: "Full Stack Development",
    image: rentlensImg,
    tech: ["React", "Spring Boot", "MySQL", "TailwindCSS", "REST APIs"],
    desc: "A modern rental management platform enabling users to list and rent properties or items seamlessly.",
    outcomes: "Automated booking workflows, integrated secure payments, and provided a centralized dashboard for property owners.",
    codeUrl: "https://github.com/dulanjanarmd/RentLens",
  },
  {
    id: 3,
    title: "NovaBank-LoanSphere",
    category: "Software Engineering",
    image: novaBankImg,
    tech: ["Java", "Spring Boot", "PostgreSQL", "Microservices"],
    desc: "A banking loan management system built to handle loan applications, approvals, and repayment tracking.",
    outcomes: "Reduced loan processing time by 40% through automated eligibility checks and streamlined approval workflows.",
    codeUrl: "https://github.com/dulanjanarmd/NovaBank-LoanSphere",
  },
  {
    id: 4,
    title: "LANKATHREAD BY CEYLOFAB",
    category: "E-Commerce Platform | System Design & Modeling",
    image: lankaThreadImg,
    tech: ["Requirements Engineering", "BPMN", "UML", "Figma", "REST API", "Database Design"],
    desc: "An end-to-end e-commerce platform designed for a Sri Lankan fashion brand, focused on clean mobile-first experience, local payment preferences (Cash on Delivery), and efficient admin management.",
    outcomes: [
      "Gathered and documented complete functional requirements with user stories for Customer and Admin roles.",
      "Created full BPMN diagrams for Order Placement, Payment, and Delivery workflows.",
      "Developed complete UML suite (Use Case, Class, Sequence, State, Component diagrams).",
      "Designed high-fidelity Figma prototype covering Product pages, Cart, and Checkout with size/color variants and Out-of-Stock handling.",
      "Modeled MySQL database schema including Products, Variants, Orders, Customers, and Promotions.",
      "Defined REST API requirements for product, inventory, order, and customer management."
    ],
    codeUrl: "https://github.com/dulanjanarmd/LankaThread-By-CeyloFab",
  }
];

const Portfolio = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("card-visible");
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".new-proj-card, .reveal-left").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio">
      <div className="edu-header reveal-left">
        <div className="sec-label">My Work</div>
        <h2 className="sec-title">RECENT <span>PROJECTS</span></h2>
      </div>

      <div className="new-port-grid">
        {projects.map((p) => (
          <div key={p.id} className="new-proj-card">
            <div className="new-proj-img">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="new-proj-body">
              <h3 className="new-proj-title">{p.title}</h3>
              <div className="new-proj-category">{p.category}</div>
              
              <div className="new-proj-tech">
                {p.tech.map(t => <span key={t} className="new-proj-tag">{t}</span>)}
              </div>
              
              <p className="new-proj-desc">{p.desc}</p>
              
              <div className="new-proj-outcomes">
                <strong>Key Outcomes:</strong>
                {Array.isArray(p.outcomes) ? (
                  <ul>
                    {p.outcomes.map((outcome, idx) => (
                      <li key={idx}>{outcome}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{p.outcomes}</p>
                )}
              </div>

              <div className="new-proj-actions">
                {p.codeUrl && (
                  <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="new-proj-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
