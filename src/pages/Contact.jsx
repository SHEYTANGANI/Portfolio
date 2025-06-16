import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-400 mb-8">
          I'm open to freelance projects, collaborations or just a chat.
        </p>

        <div className="flex justify-center gap-8 text-3xl mb-6">
          <a
            href="https://github.com/shreyarawat"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shreyarawat"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#contact-form"
            className="hover:text-yellow-400 transition"
            onClick={() => setShowForm(true)}
          >
            <FaEnvelope />
          </a>
        </div>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Say Hello
          </button>
        )}

        <AnimatePresence>
          {showForm && (
            <motion.form
              id="contact-form"
              action="https://formspree.io/f/your_form_id"
              method="POST"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
              className="mt-10 bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg p-6 shadow-lg max-w-xl mx-auto"
            >
              <div className="mb-4 text-left">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800"
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800"
                />
              </div>
              <div className="mb-4 text-left">
                <label className="block mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Send
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Contact;
