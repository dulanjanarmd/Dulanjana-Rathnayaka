import React, { useEffect } from "react";
import rentlensImg from '../images/rentlens.png';
import libraryHubImg from '../images/libraryhub.png';
import lankaThreadImg from '../images/lankathread.png';

const projects = [
  {
    id: 1,
    title: "RENTLENS",
    category: "Full Stack Development & Data Analytics",
    image: rentlensImg,
    tech: ["React.js", "Spring Boot", "Java 17", "MySQL", "Leaflet.js", "Recharts", "REST APIs"],
    desc: "A data-driven rental decision platform that helps students and young professionals evaluate properties using a transparent Rental Value Score, property comparison, budget-based recommendations, and market analytics.",
    outcomes: [
      "Authored a Business Requirements Document (BRD) and Software Requirements Specification (SRS) covering 8 functional modules.",
      "Prioritised requirements using MoSCoW and defined 10 user stories with acceptance criteria.",
      "Built a Requirements Traceability Matrix (RTM) linking user stories to system modules.",
      "Defined a data dictionary and entity relationships for property comparison and market reporting."
    ],
    codeUrl: "https://github.com/dulanjanarmd/RentLens",
  },
  {
    id: 2,
    title: "LANKATHREAD",
    category: "E-Commerce Platform",
    image: lankaThreadImg,
    tech: ["BPMN", "UML", "Figma", "Requirements Analysis", "REST API Design", "MySQL"],
    desc: "An online fashion store e-commerce platform with a focus on seamless order placement, cash-on-delivery, and WhatsApp support.",
    outcomes: [
      "Elicited and documented functional and non-functional requirements through 12 user stories covering Customer and Admin roles.",
      "Mapped order placement, payment processing, and delivery workflows using BPMN swimlanes and decision gateways.",
      "Modelled 5 UML diagrams (Use Case, Class, Sequence, State, Component) to translate business requirements into system behaviour.",
      "Developed high-fidelity Figma wireframes for product listing, details, cart, and checkout flows, and translated design into MySQL data model."
    ],
    codeUrl: "https://github.com/dulanjanarmd/LankaThread",
  },
  {
    id: 3,
    title: "LIBRARYHUB",
    category: "Business Process & Data Analytics",
    image: libraryHubImg,
    tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "React.js", "Vite", "Chart.js", "REST APIs"],
    desc: "An Online Library Management System improving university library operations through process digitization and data-driven insights.",
    outcomes: [
      "Digitized 3 core library workflows: issue/return, reservations, and inventory management.",
      "Defined role-based access requirements for 4 user groups: Students, Faculty, Librarians, and Admins.",
      "Developed an operational dashboard with 4 KPIs covering daily issues, returns, overdue items, and pending reservations to support performance monitoring."
    ],
    codeUrl: "https://github.com/dulanjanarmd/LibraryHub",
  },
  {
    id: 4,
    title: "GLOBAL SUPERSTORE SALES ANALYSIS & DASHBOARD",
    category: "Data Analysis",
    image: "https://via.placeholder.com/600x400/1a1a1a/60a5fa?text=Global+Superstore+Dashboard",
    tech: ["Power BI", "Python (Pandas)", "Excel"],
    desc: "A comprehensive sales and performance analysis dashboard leveraging retail dataset.",
    outcomes: [
      "Analysed a retail dataset containing 50,000+ records using Python (Pandas) and Excel to identify sales, profit, and margin patterns.",
      "Designed interactive Power BI dashboards with KPI cards and filters to support data-driven decision-making.",
      "Identified top-performing products and underperforming areas through visual analysis."
    ],
    codeUrl: "https://github.com/dulanjanarmd/Superstore-Sales-Analysis",
  },
  {
    id: 5,
    title: "PRIME MEDICAL",
    category: "Doctor Appointment & Patient Management System",
    image: "https://via.placeholder.com/600x400/1a1a1a/60a5fa?text=Prime+Medical",
    tech: ["Agile Scrum", "Requirements Gathering", "Spring Boot", "React", "MySQL"],
    desc: "A complete appointment and patient management system built for healthcare providers.",
    outcomes: [
      "Conducted stakeholder interviews to elicit business requirements for appointments, consultations, prescriptions, pharmacy, and billing operations.",
      "Converted stakeholder needs into user stories and prioritised the product backlog across 6 epics within a 14-week Agile delivery cycle.",
      "Specified clear acceptance criteria across 6 core areas and validated system functionality during UAT."
    ],
    codeUrl: "https://github.com/dulanjanarmd/PrimeMedical-PharmInvent",
  },
  {
    id: 6,
    title: "LANKA HEALTH INSURANCE",
    category: "Health Insurance Management System",
    image: "https://via.placeholder.com/600x400/1a1a1a/60a5fa?text=Lanka+Health+Insurance",
    tech: ["Agile Scrum", "UML", "Requirements Analysis", "Spring Boot", "MySQL"],
    desc: "A health insurance management system for tracking policies and insurance claims.",
    outcomes: [
      "Led a 6-member team through a 14-week Agile Scrum project, coordinating requirements activities and sprint planning.",
      "Elicited and analysed requirements for 6 system components, mapping business needs to functional system capabilities.",
      "Created 5 UML models, including Use Case, Class, Sequence, Activity, and ER diagrams.",
      "Designed workflows for insurance claims, policy management, and role-based access."
    ],
    codeUrl: "https://github.com/dulanjanarmd/Lanka-Health-Insurance",
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
