import React from "react";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
