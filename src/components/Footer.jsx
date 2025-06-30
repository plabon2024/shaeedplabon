import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center  text-base-content py-10 my-5">
      <aside>
        <p>
         © {new Date().getFullYear()} - Shaeed Al Shahab Plabon
         
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
