const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce website built with React, Node.js, Express, and MongoDB.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "ecommerce.jpg",
      demoLink: "https://example.com",
      sourceCodeLink: "https://github.com/example/ecommerce",
    },
    {
      title: "Social Media App",
      description:
        "A social media application built with React, Firebase, and Redux for state management.",
      technologies: ["React", "Firebase", "Redux"],
      image: "social-media.jpg",
      demoLink: "https://example.com",
      sourceCodeLink: "https://github.com/example/social-media",
    },
    {
      title: "Task Management System",
      description:
        "A task management system built with Angular, Node.js, Express, and MongoDB.",
      technologies: ["Angular", "Node.js", "Express", "MongoDB"],
      image: "task-management.jpg",
      demoLink: "https://example.com",
      sourceCodeLink: "https://github.com/example/task-management",
    },
    {
      title: "Blog Website",
      description:
        "A blog website built with Next.js, Tailwind CSS, and Strapi CMS for content management.",
      technologies: ["Next.js", "Tailwind CSS", "Strapi CMS"],
      image: "blog-website.jpg",
      demoLink: "https://example.com",
      sourceCodeLink: "https://github.com/example/blog-website",
    },
  ];

  return (
    <div className="main min-h-screen py-10 mb-16">
      <div className="container mx-auto px-4">
        <div
          className={`${
            darkMode ? "bg-jacarta-200 shadow-white" : "bg-white shadow-lg"
          } rounded-lg p-8`}
        >
          <h1 className="text-3xl font-bold my-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <strong>Technologies Used:</strong>{" "}
                  {project.technologies.join(", ")}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Source Code
                    </a>
                  </div>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
