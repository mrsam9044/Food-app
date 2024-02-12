import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-20 w-full flex items-center justify-center shadow-md bg-gray-300  font-semibold text-center gap-1">
      <span> © {currentYear} All Rights Reserved </span>
      <a
        href="https://github.com/mrsam9044"
        target="_blank"
        rel="noopener noreferrer"
      >
        Samarth Gupta
      </a>
    </div>
  );
};

export default Footer;
