import React from "react";
import { motion } from "framer-motion";
import img from "../images/about.jpg" // Replace with your image path
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black dark:bg-gray-900 flex items-center px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className=" font-serif text-4xl sm:text-5xl font-semibold text-purple-400 dark:text-white leading-relaxed md:leading-loose">
            Hi, I’m <span className="text-blue-500 font-bold">Shreya</span>,<br />
            and I like to make things that<br />

            <TypeAnimation 
          sequence={[
            "feel right.  ", 2000,
            "Sound good.",2000,
            "are fun to use.", 2000,
            "look greate." , 2000,
            "inspire people.", 2000,
            "connect people.",2000,
            "work well.",2000,
            "don't suck.",2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="italic text-blue-500 dark:text-gray-300"
        />


        { /*<span className="italic text-blue-500 dark:text-gray-300">feel right.</span> */}
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">
            A <strong>Web Developer</strong> and <strong>Data Analyst</strong> Passionate about transforming raw data into actionable insights,I am a final-year student passionate about building responsive, user-friendly web applications using modern technologies like React, JavaScript, and CSS. Skilled in translating UI/UX designs into efficient code, optimizing performance, and ensuring cross-browser compatibility. Eager to contribute my problem-solving skills and creativity to a dynamic development team while expanding my expertise in frontend frameworks
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={img}
            alt="Profile"
            className="rounded-2xl shadow-xl w-full max-w-sm mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
