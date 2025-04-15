import React from "react";
import { assets } from "../assets/assets";

const Companyservice = () => {
  return (
    <div className="bg-[#F8F8F8] py-25 font-['Lexend_Deca']">
      {/* Why Make EVB Section */}
      <h2 className="text-[24px] md:text-[28px] font-medium text-center text-[#333333] mb-25">
        Why Make EVB Your EV Charging Solution Partner
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        {/* Innovation Card */}
        <div className="bg-white rounded-[15px] p-13 min-h-[300px] text-center">
          <div className="text-blue-600 text-4xl mb-6">
            <img src={assets.iconc1} alt="Innovation Icon" className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-[24px] md:text-[28px] font-medium text-[#106AAA] mb-4">Innovation</h3>
          <p className="text-[#106AAA] text-[14px]">
            Pushing the envelope by innovative design to provide the optimal technology in providing EV charging solutions.
          </p>
        </div>

        {/* Responsibility Card */}
        <div className="bg-white rounded-[15px] p-13 min-h-[300px] text-center">
          <div className="text-blue-600 text-4xl mb-6">
            <img src={assets.iconc2} alt="Innovation Icon" className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-[24px] md:text-[28px] font-medium text-[#106AAA] mb-4">Responsibility</h3>
          <p className="text-[#106AAA] text-[14px]">
          Accountability to you and your customers is our drive to design the safest and best charging solution in the market.
          </p>
        </div>

        {/* Service Card */}
        <div className="bg-white rounded-[15px] p-13 min-h-[300px] text-center">
          <div className="text-blue-600 text-4xl mb-6">
            <img src={assets.iconc3} alt="Innovation Icon" className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-[24px] md:text-[28px] font-medium text-[#106AAA] mb-4">Service</h3>
          <p className="text-[#106AAA] text-[14px]">
          We are with you along the way in your EV charging business through our EV products, intelligent software, and experienced workers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Companyservice;