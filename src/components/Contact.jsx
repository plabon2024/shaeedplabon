import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // const now = new Date();
    // const formattedTime = now.toISOString();

    // Set value in hidden input field
    // form.current.elements["currentTime"].value = formattedTime;

    emailjs
      .sendForm(
        "service_2tyv98c",
        "template_hplrydq",
        form.current,
        "dCS6uUDaGi5ZIf4ue"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mb-20">
      <div className="w-full md:max-w-3xl flex flex-col mx-auto text-center">
        <h2 className="text-4xl font-bold md:mb-6">
          Contact <span className="text-indigo-600">Me</span>
        </h2>
        <div className="px-1 md:mb-6 mb-0 ">
          <div>
            <p className="text-lg mb-5">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 text-left"
            >
              {/* Hidden field to send timestamp */}
              <input type="hidden" name="currentTime" />

              <div className="flex flex-col">
                <label className="mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="px-4 py-2 rounded  outline"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="px-4 py-2 rounded outline"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="px-4 py-2 rounded outline"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className=" px-6 py-2  border button border-secondary rounded-full bg-primary font-medium transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {sent && (
                <p className="mt-4 font-medium">Message sent successfully!</p>
              )}
            </form>
          </div>
          <div>
            <div className="divider divider-secondary">or</div>

            <div className="flex justify-center gap-6 text-2xl ">
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
            <div className="flex flex-col">
              <a href="mailto:shaeedplabon@gmail.com" className="underline">
                shaeedplabon@gmail.com
              </a>
              <a href="tel:+8801952008738">+880 195 200 8738</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
