import React from "react";

const Contactinfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-6 md:p-12 md:px-45 py-15 md:py-25 ">
      {/* Left Content */}
      <div className="w-full md:w-[50%] space-y-6">
        <h2 className="text-[24px] md:text-[28px] font-medium text-[#333333]">
          Boost Your Brand with EVB’s Industry-Defining EV Chargers
        </h2>
        <p className="text-[#333333] text-[14px] md:text-[16px]">
          As the world shifts towards sustainable mobility, businesses that embrace EV
          charging infrastructure gain a competitive edge. EVB’s cutting-edge EV
          chargers offer the perfect solution to enhance your brand, attract
          eco-conscious customers, and future-proof your business.
        </p>

        <h3 className="text-[24px] md:text-[28px] font-medium text-[#333333]">
          Power Your Business with EVB
        </h3>
        <p className="text-[#333333] text-[14px] md:text-[16px]">
          Join the electric revolution and elevate your brand with EVB’s
          industry-defining EV chargers. Contact us today to learn how we can drive
          your business toward a more sustainable and profitable future.
        </p>

        {/* Contact Information */}
        <h4 className="text-[24px] md:text-[28px] font-medium text-[#333333]">
          Get in Touch
        </h4>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <span className="material-icons text-blue-500">location_on</span>
            <span>Chabahil, Kathmandu</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="material-icons text-blue-500">call</span>
            <span>9845674837</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="material-icons text-blue-500">email</span>
            <span>evtest@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-[15px] p-6 md:p-8 w-full md:w-1/3">
        <h3 className="text-[24px] md:text-[28px] font-medium text-[#004C83] mb-4">
          Talk to Our Expert
        </h3>
        <form className="space-y-4 md:space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Phone"
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#007FDB] text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactinfo;