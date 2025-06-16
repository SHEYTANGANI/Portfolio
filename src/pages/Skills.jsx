import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  //SiPowerbi,
  SiTableau,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-600" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-teal-500" },
  { icon: <FaPython />, name: "Python", color: "text-blue-800" },
  { icon: <SiMysql />, name: "MySQL", color: "text-blue-500" },
  //{ icon: <SiPowerbi />, name: "Power BI", color: "text-yellow-500" },
  { icon: <SiTableau />, name: "Tableau", color: "text-indigo-500" },
  { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
];

const Skills = () => (
  <section
    id="skills"
    className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800"
  >
    <h2 className="text-4xl font-bold text-center text-blue-900 dark:text-white mb-12">
      My Skills
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
          <p className="text-blue-800 dark:text-white font-semibold text-lg">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
