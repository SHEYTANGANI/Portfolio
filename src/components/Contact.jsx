const Contact = () => (
  <section id="contact" className="bg-white py-20">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p className="text-gray-600 mb-4">Have a project or job in mind? Let’s talk!</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" />
        <textarea placeholder="Your Message" className="w-full border p-3 rounded-lg h-32" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;

