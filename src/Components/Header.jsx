import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
      id="Header"
    >
      {/* Navbar is absolutely positioned so it doesn't push content down */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 font-['Lexend_Deca']">
        <h1 className="text-[36px] md:text-[60px] lg:text-[80px] font-bold leading-tight max-w-4xl mx-auto">
          Charging Innovation, <span className="text-white">Driving Change</span>
        </h1>

        <p className="mt-6 text-[16px] md:text-[20px] lg:text-[24px] font-regular leading-relaxed max-w-4xl mx-auto font-['Lexend_Deca']">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="mt-8">
          <a
            href="#"
            className="bg-[#007FDB] hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-[8px] shadow-lg transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
