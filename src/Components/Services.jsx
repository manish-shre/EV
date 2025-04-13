import React from "react";
import { assets } from "../assets/assets";
import Simage from "./Simage"; // 

const HeroSection = () => {
  return (
    <section className="font-['Lexend_Deca'] text-center pb-30">
      <p className="text-[#004C83] font-medium mb-12">— Our Services</p>
      <h2 className="text-[28px] font-semi-bold mb-12 text-gray-800">
        Global-Leading EV Charging Solution Provider
      </h2>

{/* Hero Image Section */}
<div
  className="relative bg-cover bg-center text-white px-4 sm:px-6 py-20 sm:py-40"
  style={{
    backgroundImage: `url(${assets.services})`,
  }}
>
  <div className="max-w-4xl mx-6 px-4 sm:px-12 lg:px-20">
    <h1 className="text-[28px] sm:text-[36px] lg:text-[74px] font-bold leading-tight mb-4 sm:mb-6 lg:text-left text-center">
      Empowering Electric <br /> Journeys
    </h1>
    <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed lg:text-left text-center">
      EVB, a sub-brand of Beny New Energy, is your trusted electric vehicle charging equipment manufacturer partner for all AC and
      DC electric vehicle charging needs. Serving both residential and commercial sectors, we offer an extensive range of chargers designed to suit various
      vehicles and applications. Our dedication to innovation and sustainability drives us to deliver more advanced EV charging solutions that empower the energy transition.
    </p>
  </div>
</div>

      {/* Description */}
      <p className="max-w-4xl mx-auto px-4 pt-12 text-gray-700 text-base text-[16px] leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <Simage />
    </section>
  );
};

export default HeroSection;
