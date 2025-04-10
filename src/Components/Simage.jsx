import React from "react";
import { assets } from "../assets/assets"; // Make sure to provide actual images

const ServiceSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-12 font-['Lexend_Deca']">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Row 1 */}
        <div className="col-span-1 md:col-span-1">
          <img
            src={assets.services1} 
            alt="Service"
            className=" w-full h-full object-cover"
          />
        </div>
        {/* row2 */}
        <div className="col-span-1 flex flex-col items-center justify-center bg-[#F7F7F7] p-8 text-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img src={assets.icon1} alt="Icon" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-medium mb-2">Honesty</h3>
          <p className="text-[#292929] opacity-60 text-[16px] font-light">
            Trust is the key to longevity with transparency. We earned our reputation and respect through honesty.
          </p>
        </div>
        <div className="col-span-1">
          <img
            src={assets.services3} 
            alt="Service"
            className=" w-full h-full object-cover"
          />
        </div>

        {/* Row 2 */}
        <div className="col-span-1 flex flex-col items-center justify-center bg-[#F7F7F7] p-8 text-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img src={assets.icon2} alt="Icon" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-medium mb-2">Development</h3>
          <p className="text-[#292929] opacity-60 text-[16px] font-light">
          Consistently pursue growth in workforce and skill level, striving to pursue excellence and commitment to our vision of a greener tomorrow.
          </p>
        </div>
        <div className="col-span-1">
          <img
            src={assets.services2} 
            alt="Service"
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center bg-[#F7F7F7] p-8 text-center">
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <img src={assets.icon3} alt="Icon" className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-medium mb-2">Management</h3>
          <p className="text-[#292929] opacity-60 text-[16px] font-light">
          We guide our staff members and ensure we pursue the same goal by leading by example and striving to be the best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
