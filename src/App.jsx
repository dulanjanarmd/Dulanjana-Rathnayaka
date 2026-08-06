import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import "./styles.css";

const siteProps = {
  name: "Dulanjana Rathnayaka",
  title: "Aspiring Business Analyst | Data Analyst | System Analyst",
  email: "dulanjanarmd@gmail.com",
  gitHub: "dulanjanarmd",
  instagram: "dulanjanarmd",
  linkedIn: "dulanjanarmd",
  facebook: "dulanjanarmd",
  whatsapp: "94XXXXXXXXX",
  phone: "+94 7X XXX XXXX",
};

const App = () => (
  <div id="main">
    <Header />
    <Home name={siteProps.name} title={siteProps.title} />
    <About />
    <Education />
    <Portfolio />
    <Footer {...siteProps} />
  </div>
);

export default App;
