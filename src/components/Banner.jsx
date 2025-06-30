import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/avatar.png";
import { FaXTwitter } from "react-icons/fa6";
import { scrollToSection } from "./Navbar";
import TextPressure from "./TextPressure";
const Banner = () => {
  return (
    <div id="banner" className="h-screen pt-3.5">
      <section className="min-h-screen flex items-center justify-center text-secondary px-4">
        <div className="max-w-3xl text-center">
          <div class="avatar  avatar-placeholder">
            <div class="bg-neutral text-neutral-content w-40 rounded-full">
              <img src={avatar} alt="" />
            </div>
          </div>
          <p className="m-2 font-stretch-150%">Hi, I'm </p>
      
          <div className="text-secondary" style={{}}>
            <TextPressure
              text="PLABON"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              minFontSize={36}
            />
          </div>
          <p className="text-lg sm:text-xl mb-6">
            <span className="text-accent font-bold">MERN Stack Developer</span>
          </p>
          <p className="text-lg mb-6">From Bangladesh</p>

          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-accent button hover:bg-indigo-700 transition text-white px-6 py-2 rounded-full font-medium shadow">
              Resume
            </button>

            <button
              className=" px-6 py-2 border button border-secondary rounded-full bg-primary font-medium transition"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/shaeedalshahabplabon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="" />
            </a>
            <a
              href="https://github.com/plabon2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="" />
            </a>

            <a
              href="https://x.com/0xplabon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
