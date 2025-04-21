import React, { useState } from 'react';
import { assets } from '../assets/assets';
import Chargingpower from './Chargingpower';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(assets.productdes1);
  const [fade, setFade] = useState(false); // State to manage fade animation

  // Array of thumbnail images
  const thumbnails = [
    assets.productdes1,
    assets.productdes2,
    assets.productdes3,
    assets.productdes4,
    assets.productdes2,
  ];

  // Function to handle image selection with animation
  const handleImageChange = (src) => {
    setFade(true);
    setTimeout(() => {
      setSelectedImage(src);
      setFade(false);
    }, 300);
  };

  // State to manage the visible range of thumbnails
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4; // Number of thumbnails visible at a time

  // Function to scroll up
  const scrollUp = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Function to scroll down
  const scrollDown = () => {
    if (startIndex + visibleCount < thumbnails.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[95%] md:max-w-[75%] mx-auto font-['Lexend_Deca'] py-15 md:py-25">
      {/* Left Thumbnail Images - Added mobile spacing */}
      <div className="flex flex-col items-center space-y-12 mb-6 md:mb-0">
        {/* Up Arrow */}
        <motion.button
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollUp}
          className={`p-2 rounded-full bg-gray-100 hover:bg-blue-50 ${
            startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-600'
          }`}
          disabled={startIndex === 0}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 rotate-180" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.button>

        {/* Thumbnails - Adjusted for mobile */}
        <div className="space-y-4 flex flex-row md:flex-col gap-6 md:gap-0 md:space-y-4 overflow-x-auto md:overflow-x-visible">
          {thumbnails.slice(startIndex, startIndex + visibleCount).map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <motion.img
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => handleImageChange(src)}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  w-20 md:w-30 h-20 md:h-24 object-contain cursor-pointer rounded-md
                  transition-all duration-300
                  ${selectedImage === src 
                    ? 'border-2 border-[#004C83] shadow-lg' 
                    : 'border border-transparent hover:border-gray-300'
                  }
                `}
              />
            </motion.div>
          ))}
        </div>

        {/* Down Arrow */}
        <motion.button
          whileHover={{ scale: 1.2, y: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollDown}
          className={`p-2 rounded-full bg-gray-100 hover:bg-blue-50 ${
            startIndex + visibleCount >= thumbnails.length 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:text-blue-600'
          }`}
          disabled={startIndex + visibleCount >= thumbnails.length}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </motion.button>
      </div>

      {/* Main Product Content - Improved mobile layout */}
      <div className="flex flex-col items-center md:flex-row w-full gap-8 md:gap-20">
        {/* Main Image Container */}
        <div className="flex justify-center w-full md:w-1/2 px-4 md:px-0">
          <img
            src={selectedImage}
            alt="Main Product"
            className={`object-contain w-full max-h-[400px] md:max-h-[500px] transition-opacity duration-300 
              ${fade ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>

        {/* Product Details - Improved mobile spacing */}
        <div className="w-full md:w-1/2 space-y-4 px-4 md:px-0">
          <h2 className="text-2xl md:text-[36px] font-medium  md:text-left">
            Floor-Mounted 3 Guns DC EV
          </h2>
          <p className="text-gray-600 text-[14px] md:text-[16px] md:text-left">
            EVB 2 Guns DC fast charger for electric vehicles offers flexibility across power ranges from 60kW to 240kW to charge any two EVs simultaneously.
          </p>

          {/* Badges - Made responsive */}
          <div className="flex gap-2 md:gap-4 flex-wrap  md:justify-start">
            {['IP55', 'OCPP1.6J', 'Full Protection'].map((label, idx) => (
              <span
                key={idx}
                className="bg-[#007FDB] text-white px-3 md:px-5 py-2 md:py-3 rounded-md text-[14px] md:text-[18px]"
              >
                {label}
              </span>
            ))}
          </div>

          <Chargingpower />

          {/* Certifications Section */}
          <div className="space-y-2">
          <p className="text-lg sm:text-xl font-medium mb-2 text-[#004C83]">
                            Certification
                        </p>
            <div className="bg-gray-50 rounded-lg p-2 md:p-0">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4">
                {[
                  assets.certificate1,
                  assets.certificate2,
                  assets.certificate3,
                  assets.certificate4,
                  assets.certificate5,
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-1 sm:p-2"
                  >
                    <img
                      src={cert}
                      alt={`Certification ${index + 1}`}
                      className="h-4 sm:h-6 md:h-8 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Button - Made responsive */}
          <div className="mt-6 md:mt-8 px-0 md:px-0">
            <button className="bg-[#007FDB] text-[16px] md:text-[18px] hover:bg-blue-700 
              text-white px-4 md:px-6 py-2 md:py-3 rounded-md w-full">
              Download Dataset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;