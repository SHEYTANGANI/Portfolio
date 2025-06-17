import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1Image from "../images/project1.png";
import project2Image from "../images/project2.png";
import project3Image from "../images/project3.png";
import project4Image from "../images/project4.png";
import project5Image from "../images/project5.png";

const projects = [
  {
    title: "E-Commerce Admin Dashboard",
    image: project1Image,
    desc: "Interactive admin dashboard built with React and Chart.js for sales and inventory insights.",
    tech: "React , Tailwind CSS",
    github: "https://github.com/Shreytangani17/ecommerce-admin-dashboard/tree/main?tab=readme-ov-file",
    demo: "#"
  },
  {
    title: "Weather Forecast App",
    image: project2Image,
    desc: "Real-time weather updates using OpenWeather API, built with React and Tailwind CSS.",
    tech: "React, Tailwind CSS, OpenWeather API",
    github: "https://github.com/Shreytangani17/weather-app",
    demo: "#"
  },
  {
    title: "Data Analytics Dashboard",
    image: project3Image,
    desc: "Power BI dashboard visualizing key performance metrics with slicers and charts.",
    tech: "Power BI, DAX",
    github: "https://github.com/Shreytangani17/weather-app",
    demo: "#"
  },
  {
    title: "Task Manager App",
    image: project4Image,
    desc: "Full-stack task manager app with user authentication and drag-drop UI using React + Node.js.",
    tech: "React, Node.js, MongoDB",
    github: "#",
    demo: "#"
  },
  {
    title: "Travel Booking Website",
    image: project5Image,
    desc: "A responsive travel booking UI for hotels and tours, with filters and interactive maps.",
    tech: "React, Node.js, Mapbox",
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Selected Work</h2>
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 bg-black rounded-lg overflow-hidden shadow-md"
            >
              <div className="overflow-hidden group h-48 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-white flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-blue-300 mb-1 italic">{project.tech}</p>
                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 border border-white text-white text-sm rounded-full font-medium flex items-center gap-2 hover:bg-white hover:text-black transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
