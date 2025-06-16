import React, { useState, useEffect } from "react";
import logo from "../images/logo.png"; // Ensure logo.png is in /assets

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
         <img src={logo} alt="Logo" className=" w-auto h-16 rounded-full" /> 
          <h1 className="text-xl gap-0 font-bold text-blue-600 dark:text-yellow-300 font-serif">SR</h1>
        </div>
        <nav className="space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-yellow-300">Home</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-yellow-300">About</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-yellow-300">Projects</a>
          <a href="#skills" className="hover:text-blue-600 dark:hover:text-yellow-300">Skills</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-yellow-300">Contact</a>
        </nav>
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 px-3 py-1 rounded-lg text-white bg-blue-600 dark:bg-yellow-500 dark:text-gray-900 text-sm"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;

