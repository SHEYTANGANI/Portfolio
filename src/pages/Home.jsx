import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from "../images/frist.jpeg"


const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-black"
    
      style={{
        backgroundImage: "url('../src/images/fouth.jpg')",
     }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-serif">Shreytangani Rawat</h1>

        <TypeAnimation 
          sequence={[
            "Freelance  ", 2000,
            "Frontend Developer",2000,
            "Data Analyst", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl sm:text-2xl font-medium"
        />
      </div>
    </section>
  );
};

export default Home;
