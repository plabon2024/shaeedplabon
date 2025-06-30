import React, { useEffect, useState } from "react";

const skills = [
  { name: "HTML5", src: "/html5.svg" },
  { name: "CSS3", src: "/css_old.svg" },
  { name: "JavaScript", src: "/javascript.svg" },
  { name: "Tailwind CSS", src: "/tailwindcss.svg" },
  {
    name: "React",
    src: { light: "/React_light.svg", dark: "/React_dark.svg" },
    themeBased: true,
  },
  { name: "React Router", src: "/reactrouter.svg" },
  {
    name: "Express.js",
    src: { light: "/Express.js_light.svg", dark: "/Express.js_dark.svg" },
    themeBased: true,
  },
  { name: "Node.js", src: "/nodejs.svg" },
  { name: "MongoDB", src: "/mongodb.svg" },
  { name: "Firebase", src: "/firebase.svg" },
];

const AboutMe = () => {
  // const [theme, setTheme] = useState(
  //   document.documentElement.getAttribute("data-theme") || "light"
  // );
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Set initial theme after component mounts
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);

    const observer = new MutationObserver(() => {
      const updatedTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 px-6">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-accent">Me</span>
        </h2>
        <p className="text-lg leading-7 mb-8">
          I'm <span className="font-semibold">Shaeed Al Shahab Plabon</span>, a
          passionate MERN Stack Developer <br /> with a strong focus on creating
          clean, efficient, and user-friendly web applications. I love turning
          complex problems into simple, beautiful, and intuitive designs.
          Whether it’s frontend or backend, I enjoy every part of the
          development process.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Development Skills</h3>
            <div className="divider divider-accent"></div>
            <p className="text-lg leading-7 mb-8">
              As a MERN stack developer specializing in frontend development
              with a strong understanding of backend architecture, I build
              dynamic, scalable web applications. My focus is on creating
              seamless user experiences with high performance and efficiency,
              leveraging modern technologies to deliver robust, full-stack
              solutions.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-110 space-y-2"
                >
                  <img
                    src={
                      skill.themeBased
                        ? theme === "dark"
                          ? skill.src.dark
                          : skill.src.light
                        : skill.src
                    }
                    alt={skill.name}
                    className="h-12 w-auto"
                  />
                  <span className="text-sm text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
