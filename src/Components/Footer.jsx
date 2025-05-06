import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
      <footer className="bg-[#F8F8F8] text-[#292929] pt-12 pb-6">

        <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 content-center gap-0">
            {/* Logo section - centered in mobile */}
            <div className="col-span-2 flex justify-center mb-8 md:col-span-1 md:mb-0">
              <a href="#" className="flex-shrink-0 mt-8">
                <img src={assets.logo} alt="logo" className="w-24 md:h-24" />
              </a>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#333333] mb-4">Charging Industry</h3>
              <ul className="space-y-2 font-medium text-[#292929] opacity-60 mb-4">
                <li><a href="#" className="hover:text-blue-700 transition-colors ">AC EV Charger</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">AC EV Charger</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">AC EV Charger</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">AC EV Charger</a></li>
                 
              </ul>
            </div>
    
            {/* Charging Industry Column 2 */}
             {/* Charging Solutions Section */}
            <div>
              <h3 className="text-lg font-medium text-[#333333] mb-4">Charging Solutions</h3>
              <ul className="space-y-2 font-medium text-[#292929] opacity-60 mb-4">
                <li><a href="#" className="hover:text-blue-700 transition-colors ">AC EV Charger</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">DC EV Charger</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">EVB + ESS</a></li>
              </ul>
            </div>
      {/* Charging Solutions Section */}
      <div>
              <h3 className="text-lg font-medium text-[#333333] mb-4">Company</h3>
              <ul className="space-y-2 font-medium text-[#292929] opacity-60 mb-4">
                <li><a href="#" className="hover:text-blue-700 transition-colors ">About EVB</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Projects</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Technology</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Sustainability</a></li>
                 
              </ul>
            </div>
    
             {/* Charging Solutions Section */}
             <div>
              <h3 className="text-lg font-medium text-[#333333] mb-4">Media</h3>
              <ul className="space-y-2 font-medium text-[#292929] opacity-60 mb-4">
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Blog</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Exhibition</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Indistry News</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Projects</a></li>
                <li><a href="#" className="hover:text-blue-700 transition-colors ">Charging Industry</a></li>
                 
              </ul>
            </div>
            </div>
    
            
  {/* Bottom Section */}
  <div className="mt-6 pt-4 border-t border-gray-700 pb-0">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      {/* Left section: Copyright */}
      <p className="text-[#333333] text-[18px] font-medium sm:text-left sm:flex-1">
        © 2024 VOITH. All rights reserved.
      </p>



      {/* Center section: Terms of Service & Privacy Policy */}
      <div className="flex space-x-4 font-medium text-[#292929] text-[16px] opacity-60 justify-center sm:flex-1">
        <a href="#" className="hover:text-blue-500 transition-colors">
          Terms Of Service
        </a>
        <a href="#" className="hover:text-blue-500 transition-colors">
          Privacy Policy
        </a>
      </div>

      {/* Right section: Social Links */}
      <div className="flex space-x-6 sm:flex-1 justify-end ">
        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 flex items-center justify-center rounded-full transition"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0, 191, 255, 0.1) ")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
          }
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-[#007FDB] text-[20px]"
          />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 flex items-center justify-center rounded-full transition"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0, 191, 255, 0.1) ")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
          }
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#007FDB] text-[20px]"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 flex items-center justify-center rounded-full transition"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0, 191, 255, 0.1) ")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")
          }
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-[#007FDB] text-[20px]"
          />
        </a>
      </div>
    </div>
  </div>
  </div>       
</footer>
    );
  };
  
  export default Footer;
