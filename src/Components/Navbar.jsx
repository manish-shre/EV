import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import SocialLinks from "./Sociallink";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 font-sans transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img src={assets.logo} alt="logo" className="w-20 md:h-20" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-[16px] font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer uppercase ${
                isScrolled
                  ? isActive
                    ? "text-blue-900"
                    : "text-blue-500 hover:text-blue-700"
                  : isActive
                  ? "text-blue-500"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Product"
            className={({ isActive }) =>
              `cursor-pointer uppercase ${
                isScrolled
                  ? isActive
                    ? "text-blue-900"
                    : "text-blue-500 hover:text-blue-700"
                  : isActive
                  ? "text-blue-500"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/Company"
            className={({ isActive }) =>
              `cursor-pointer uppercase ${
                isScrolled
                  ? isActive
                    ? "text-blue-900"
                    : "text-blue-500 hover:text-blue-700"
                  : isActive
                  ? "text-blue-500"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            Company
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `cursor-pointer uppercase ${
                isScrolled
                  ? isActive
                    ? "text-blue-900"
                    : "text-blue-500 hover:text-blue-700"
                  : isActive
                  ? "text-blue-500"
                  : "text-white hover:text-gray-300"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Social Links (Desktop) */}
        <div className="hidden md:block">
          <SocialLinks iconColor={isScrolled ? "text-blue-500" : "text-white"} />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8 text-blue-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-center items-center space-y-8 text-black text-xl font-semibold">
          <button onClick={toggleMenu} className="absolute top-6 right-6">
            <X className="w-8 h-8" />
          </button>

          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Product"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/Company"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Company
          </NavLink>
          <NavLink
            to="/Contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Contact
          </NavLink>

          <div className="mt-10">
            <SocialLinks iconColor="text-blue-500" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;