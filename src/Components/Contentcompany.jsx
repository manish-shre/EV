import React from 'react';
import { assets } from '../assets/assets'; // Ensure this path is correct

const Contentcompany = () => {
  return (
    <>
      {/* Content Section */}
      <div className="text-[#333333] px-4 sm:px-8 lg:px-16 py-25 pb-12 sm:pb-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-center">
          <div className="w-full flex justify-center">
            <img
              src={assets.company1}
              alt="Car Image"
              className="rounded-[10px] w-full max-w-[650px] h-[450px] object-cover"
            />
          </div>
          <div className="w-full">
            <div className="max-w-[650px] mx-auto">
              <h2 className="text-[20px] sm:text-2xl md:text-[28px] font-bold mt-4 mb-4">
                Leading Technology of EV Charging Station Company
              </h2>
              <p className="text-gray-700 mb-6 text-base sm:text-lg">
                EVB is an EV charging infrastructure company under Beny New Energy,
                established in 2011. EVB is committed to providing high-quality
                electric vehicle products and related services, continuously
                developing innovative electric vehicle charging solutions, and
                helping customers achieve their renewable energy goals. Our mission
                is to empower individuals and organizations to utilize renewable
                energy for a more sustainable future.
              </p>
              <button className="bg-[#007FDB] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-[8px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div className="w-full">
            <div className="max-w-[650px] mx-auto">
              <h2 className="text-[20px] sm:text-2xl md:text-[28px] font-bold mb-4">
                Pioneering EV Charging Technology
              </h2>
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                As a top EV charger company, EVB is committed to producing a series of
                continuously developing high-quality charging systems and providing a
                safe, convenient, and fast charging experience for electric vehicles.
                Our outstanding charging station technologies include DLB function,
                Photovoltaic DLB, PEN Protection, etc.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={assets.company2}
              alt="Car Image"
              className="rounded-[10px] w-full max-w-[650px] h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contentcompany;