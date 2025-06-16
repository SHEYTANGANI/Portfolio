const ProjectCard = ({ title, image, desc }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
    <img src={image} alt={title} className="w-full h-52 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

export default ProjectCard;
