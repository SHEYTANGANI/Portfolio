import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1Image from "../images/project1.png"; // Make sure this path is correct
import project2Image from "../images/project2.png"; // Add these images to your project
import project3Image from "../images/project3.png";
import project4Image from "../images/project4.png" ;// Add these images to your project
import project5Image from "../images/project5.png"

const projects = [
  {
    title: "E-Commerce Admin Dashboard",
    image: project1Image, // Use the imported image
    desc: "Interactive admin dashboard built with React and Chart.js for sales and inventory insights.",
    tech: "React, Chart.js, Tailwind CSS",
    github: "#",
    demo: "#"
  },
  {
    title: "Weather Forecast App",
    image: project2Image,
    desc: "Real-time weather updates using OpenWeather API, built with React and Tailwind CSS.",
    tech: "React, Tailwind CSS, OpenWeather API",
    github: "#",
    demo: "#"
  },
  {
    title: "Data Analytics Dashboard",
    image: project3Image,
    desc: "Power BI dashboard visualizing key performance metrics with slicers and charts.",
    tech: "Power BI, DAX",
    github: "#",
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
    <section id="projects" className="bg-black py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16">Selected Work</h2>
        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-64 h-40 overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white border border-white px-3 py-1 rounded flex items-center gap-2 hover:bg-white hover:text-black transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white border border-white px-3 py-1 rounded flex items-center gap-2 hover:bg-white hover:text-black transition"
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