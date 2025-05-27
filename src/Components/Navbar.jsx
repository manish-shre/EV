import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import SocialLinks from "./Sociallink";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Prevent scrolling when the mobile menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Reset scrolling
  };

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
      document.body.style.overflow = "auto"; // Reset overflow on unmount
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img src={assets.logo} alt="logo" className="w-16 md:h-16" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-12 text-[16px] font-semibold absolute left-1/2 transform -translate-x-1/2">
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
        <div className="md:hidden z-50 relative">
          <button
            onClick={toggleMenu}
            className="z-50"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className={`w-8 h-8 ${isScrolled ? "text-blue-900" : "text-blue-800"}`} />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? "text-blue-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col justify-center items-center space-y-8 text-black text-xl font-semibold">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 z-50"
            aria-label="Close mobile menu"
          >
          </button>

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Product"
            onClick={closeMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/Company"
            onClick={closeMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Company
          </NavLink>
          <NavLink
            to="/Contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `uppercase hover:text-blue-700 ${isActive ? "text-blue-500" : ""}`
            }
          >
            Contact
          </NavLink>

          <div className="mt-10">
            <SocialLinks iconColor="text-blue-700" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
