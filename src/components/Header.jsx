import { faBurger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/food.png";
import NavLinks from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" h-20 w-full flex items-center justify-between bg-white px-8 shadow-md fixed z-10">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-16 curved" src={logo} alt="food.png" />
        </Link>
        <div className="mt-4">
          <h2 className="font-Pacifico text-2xl leading-6">Food Palace.</h2>
          <a
            href="https://github.com/mrsam9044"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="text-xs ml-8 font-RobotoCondenced">
              by Samarth Gupta
            </h6>
          </a>
        </div>
      </div>
      <NavLinks className="hidden md:flex items-center justify-around h-full max-w-[50%] font-semibold p-10 gap-8  mr-5" />
      <button
        onClick={toggleMenu}
        className={`text-3xl md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBurger} />
      </button>

      {isOpen && (
        <NavLinks className=" bg-gray-800 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-30 w-11/12 h-60 flex flex-wrap items-center justify-center flex-col md:hidden z-10  absolute m-auto left-0 right-0 top-24 text-lg gap-2 font-semibold" />
      )}
    </div>
  );
};

export default Header;
