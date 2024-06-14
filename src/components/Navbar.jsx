import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <>
      <nav className="bg-black p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-black font-bold text-lg">
            <span className="text-blue-500">Ujwal's </span>
            <span className="text-white">Portfolio</span>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:border-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`hidden lg:flex space-x-4 ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          >
            {links.map((link, index) => (
              <ScrollLink
                key={index}
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                className={`text-white ${
                  location.pathname === link.id ? "font-bold" : ""
                }`}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          {links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.id}
              spy={true}
              smooth={true}
              duration={500}
              className={`block text-white p-2 ${
                location.pathname === link.id ? "font-bold" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      </nav>
      <div className="bg-blue-500 h-2"></div>
    </>
  );
};

export default Navbar;
