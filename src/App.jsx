import React, { useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Certificates from "./Components/Certificates";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Background3D from "./Components/Background3D";
import "./styles.css";
import "./animations.css";

const siteProps = {
  name: "Dulanjana Rathnayaka",
  title: "Aspiring Business Analyst | Data Analyst | System Analyst",
  email: "dulanjanarmd@gmail.com",
  gitHub: "dulanjanarmd",
  instagram: "dulanjanarmd",
  linkedIn: "dulanjanarmd",
  facebook: "dulanjanarmd",
  reddit: "dulanjanarmd",
  medium: "dulanjanarmd",
};

const App = () => {
  useEffect(() => {
    // Check if the device has a mouse and is not a mobile screen
    const isMobile = window.matchMedia("(hover: none)").matches || window.innerWidth <= 768;
    
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const isButton = card.matches('.hero-btn, .new-proj-btn, .cert-btn-small, .header-nav a, .cc-social-item');
      const isPhoto = card.matches('.hero-photo-circle');
      const maxRotate = isButton ? 15 : (isPhoto ? 25 : 6);
      
      // Calculate rotation: tilting towards cursor
      const rotateX = ((y - centerY) / centerY) * -maxRotate;
      const rotateY = ((x - centerX) / centerX) * maxRotate;
      
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
      
      if (isPhoto) {
        // Advanced 3D Parallax specifically for photo
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        
        // Move the image inside for parallax
        const img = card.querySelector('img');
        if (img) {
          img.style.transition = 'transform 0.1s ease-out';
          img.style.transform = `translateX(${rotateY * -0.6}px) translateY(${rotateX * -0.6}px) scale(1.1)`;
        }
        
        // Move the glare
        const glare = card.querySelector('.glare');
        if (glare) {
          glare.style.transform = `translateX(${rotateY * 3}px) translateY(${rotateX * 3}px)`;
          glare.style.opacity = 0.4 + (Math.abs(rotateX) + Math.abs(rotateY)) / 60;
        }
      } else {
        // Standard button/card tilt
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isButton ? 1.05 : 1.02}, ${isButton ? 1.05 : 1.02}, 1.02) translateZ(${isButton ? 10 : 15}px)`;
      }
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      // Reset transition to slow default for smooth return
      card.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      card.style.transform = ''; // Clears inline transform so it goes back to flat
      
      const isPhoto = card.matches('.hero-photo-circle');
      if (isPhoto) {
        const img = card.querySelector('img');
        if (img) {
          img.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
          img.style.transform = 'scale(1.05)';
        }
        const glare = card.querySelector('.glare');
        if (glare) {
          glare.style.transition = 'transform 0.6s, opacity 0.6s';
          glare.style.transform = '';
          glare.style.opacity = '0';
        }
      }
    };

    const attachTilt = () => {
      const selectors = [
        '.about-card', '.education-card', '.new-proj-card', 
        '.cert-list-container', '.clean-contact-cta', '.clean-contact-socials',
        '.hero-btn', '.new-proj-btn', '.cert-btn-small', '.header-nav a', '.cc-social-item', '.hero-photo-circle'
      ].join(', ');
      
      document.querySelectorAll(selectors).forEach((card) => {
        if (!card.dataset.tiltAttached) {
          card.addEventListener('mousemove', handleMouseMove);
          card.addEventListener('mouseleave', handleMouseLeave);
          card.dataset.tiltAttached = "true";
        }
      });
    };

    attachTilt();
    const timeout = setTimeout(attachTilt, 1000); // Re-run just in case child components mount slower

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="main">
      <Background3D />
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Certificates />
      <Portfolio />
      <Footer {...siteProps} />
    </div>
  );
};

export default App;
