import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
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
};

const App = () => (
  <div id="main">
    <Header />
    <Home name={siteProps.name} title={siteProps.title} />
    <About />
    <Services />
    <Portfolio />
    <Footer {...siteProps} />
  </div>
);

export default App;
