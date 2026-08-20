import React from "react";
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

const App = () => (
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

export default App;
