import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-pink-200 text-center px-4 font-serif"
    >
      <div>
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Make <br></br> Cool <br></br>Things <br></br> Together
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I'm a data analyst & web developer crafting meaningful digital experiences.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
