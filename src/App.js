import React from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./pages/HeroPage";
import Project from "./pages/Project";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Project />
      <AboutPage />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
