import { Link, useLocation } from "react-router-dom";
import { Links } from "../common/Links";
import React, { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

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
            {Links.filter((link) => link.showInNavigation).map(
              (link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`text-white ${
                    location.pathname === link.path ? "font-bold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          {Links.filter((link) => link.showInNavigation).map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`block text-white p-2 ${
                location.pathname === link.path ? "font-bold" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="bg-blue-500 h-2"></div>
    </>
  );
};

export default Navbar;
