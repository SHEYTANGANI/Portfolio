import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect (() => {
  AOS.init({ duration: 1000 });
}, []);





  return (
    <div className="font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <Home /> 
      <Hero/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
