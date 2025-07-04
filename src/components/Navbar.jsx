import React, { useEffect, useState } from "react";

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["banner", "about", "projects", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return {
          id,
          top: el.offsetTop - 100,
        };
      });

      const current = offsets
        .reverse()
        .find((section) => scrollY >= section.top);

      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const navItems = [
    { id: "banner", label: "Home" },
    { id: "about", label: "About me" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div
      className="navbar backdrop-blur-3xl text-2xl fixed top-0 left-0 right-0 bg shadow-sm px-4 z-50"
      style={{ width: "inherit", maxWidth: "inherit", margin: "0 auto" }}
    >
      {" "}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-base-100">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left ${
                    activeSection === item.id ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <a
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollToSection("banner")}
        >
          &lt;/&gt;
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-2 px-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => scrollToSection(item.id)}
                className={`hover:underline transition-all duration-200 cursor-pointer ${
                  activeSection === item.id ? "font-bold text-accent" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end ">
        <div>
          <label className="swap swap-rotate mx-5 ">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
