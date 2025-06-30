import React from "react";

const projects = [
  {
    title: "Move Swift",
    description:
      "Move Swift is a parcel delivery platform with real-time tracking, Firebase authentication, Leaflet map integration, and role-based dashboards for users and admins.",
    image: "/projects/Move Swift.png",
    tech: [
      "React 19",
      "Firebase",
      "React Router v7",
      "Tailwind CSS",
      "Express js",
      "MongoDB",
    ],
    github: "https://github.com/plabon2024/Move-Swift",
    live: "https://moveswift-e77f1.web.app/",
  },
  {
    title: "Espresso Emporium",
    description:
      "A responsive coffee shop UI built with React 19, Tailwind CSS 4, DaisyUI 5, and Vite. It features a clean design, component-based layout, and fast performance.",
    image: "/projects/Espresso Emporium.png",
    tech: [
      "React 19",
      "Tailwind CSS 4",
      "Express js",
      "MongoDB",

      "React Router 7",
    ],
    github: "https://github.com/plabon2024/Espresso-Emporium",
    live: "https://elegant-chaja-103a90.netlify.app/",
  },
  {
    title: "GardenLink Community",
    description:
      "GardenLink is a community platform for gardening enthusiasts to share tips, photos, and connect with others. Built with React 19 and Firebase, it features real-time updates, smooth animations, and mobile-friendly design.",
    image: "/projects/GardenLink.png", // Make sure you have this in your public folder
    tech: [
      "React 19",
      "TailwindCSS",
      "Firebase",
      "React Router",
      "Swiper.js",
      "Express js",
      "MongoDB",
    ],
    github: "https://github.com/plabon2024/GardenLink",
    live: "https://gardening-community-4f424.web.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-accent/80 text-white px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline hover:font-bold hover:underlin"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline hover:font-bold hover:underlin"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
