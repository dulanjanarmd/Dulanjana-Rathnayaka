import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
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
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.className = theme === "light" ? "light-mode" : "dark-mode";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div id="main" className={`app-container ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Home name={siteProps.name} title={siteProps.title} theme={theme} />
      <About />
      <Education />
      <Portfolio />
      <Footer {...siteProps} />
    </div>
  );
};

export default App;

