import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-100 to-purple-300 py-6 text-center ">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-sm text-gray-700 mb-4 font-medium">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-800">Shreya Rawat</span>. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 text-blue-700 text-2xl mb-6">
        <a href="https://github.com/Shreytangani17" target="_blank" rel="noreferrer" className="hover:text-black transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/shreytangani-rawat-ab6159368" target="_blank" rel="noreferrer" className="hover:text-black transition">
          <FaLinkedin />
        </a>
        <a href="mailto:rshreya085@gmail.com@example.com" target="_blank" rel="noreferrer" className="hover:text-black transition">
          <FaEnvelope />
        </a>
      </div>

      <div className="mt-2">
        <a
          href="/shreya_resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
        >
          📄 Download My Resume
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

