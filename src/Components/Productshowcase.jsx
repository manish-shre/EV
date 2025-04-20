import React, { useState } from 'react';
import { assets } from '../assets/assets';

const ProductShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(assets.productdes1);
  const [fade, setFade] = useState(false); // State to manage fade animation

  // Array of thumbnail images
  const thumbnails = [
    assets.productdes1,
    assets.productdes2,
    assets.productdes3,
    assets.productdes4,
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
  const visibleCount = 3; // Number of thumbnails visible at a time

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
    <div className="flex flex-col md:flex-row p-6 md:p-0 max-w-[80%] mx-auto font-['Lexend_Deca'] md:py-25 py-15">
      {/* Left Thumbnail Images */}
      <div className="flex flex-col items-center space-y-8">
        <button
          onClick={scrollUp}
          className={`rotate-180 text-[#292929] opacity-60 hover:text-blue-900 ${
            startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}S
          disabled={startIndex === 0}
        >
          ▲
        </button>
        {thumbnails.slice(startIndex, startIndex + visibleCount).map((src, idx) => (
  <img
    key={idx}
    src={src}
    alt={`Thumbnail ${idx + 1}`}
    onClick={() => handleImageChange(src)} // Update the selected image with animation
    className={`w-30 h-24 object-contain cursor-pointer rounded-md ${
      selectedImage === src ? 'border-1 border-[#004C83]' : 'border-none'
    }`}
  />
))}
        <button
          onClick={scrollDown}
          className={`text-gray-500 hover:text-black ${
            startIndex + visibleCount >= thumbnails.length
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
          disabled={startIndex + visibleCount >= thumbnails.length}
        >
          ▼
        </button>
      </div>

      {/* Main Product Content */}
      <div className="flex flex-col md:flex-row w-full gap-10">
        {/* Main Product Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={selectedImage} // Display the selected image
            alt="Main Product"
            className={`object-contain max-h-[400px] transition-opacity duration-300 ${
              fade ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-[36px] font-medium">Floor-Mounted 3 Guns DC EV</h2>
          <p className="text-gray-600 text-[16px]">
            EVB 2 Guns DC fast charger for electric vehicles offers flexibility across power ranges from 60kW to 240kW to charge any two EVs simultaneously.
          </p>

          {/* Badges */}
          <div className="flex gap-4 flex-wrap">
            {['IP55', 'OCPP1.6J', 'Full Protection'].map((label, idx) => (
              <span
                key={idx}
                className="bg-[#007FDB] text-white px-5 py-3 rounded-md text-[18px]"
              >
                {label}
              </span>
            ))}
          </div>

          {/* Power Info */}
          <p className="text-[18px] font-medium text-[#004C83]">Charging Power</p>
          <div className="flex items-center gap-12 mt-4">
            <div>
              <p className="text-xl font-bold">10 min</p>
              <p className="text-gray-500 text-sm">Charging Time</p>
            </div>
            <div>
              <p className="text-xl font-bold">55 km</p>
              <p className="text-gray-500 text-sm">Distance</p>
            </div>
          </div>

          {/* Charging Levels */}
          <div className="flex gap-2 flex-wrap mt-4">
            {['60 KW', '90 KW', '120 KW', '150 KW', '180 KW', '240 KW'].map(
              (level, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded border ${
                    level === '150 KW'
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'text-gray-600 border-gray-300'
                  }`}
                >
                  {level}
                </div>
              )
            )}
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <p className="text-[18px] font-medium mb-2 text-[#004C83]">
              Certifications
            </p>
            <div className="px-10 flex items-center gap-16 bg-[#F8F8F8] p-4 rounded-lg">
              <img
                src={assets.certificate1}
                alt="Certificate 1 logo"
                className="h-6"
              />
              <img
                src={assets.certificate2}
                alt="Certificate 2 logo"
                className="h-6"
              />
              <img
                src={assets.certificate3}
                alt="Certificate 3 logo"
                className="h-6"
              />
              <img
                src={assets.certificate4}
                alt="Certificate 4 logo"
                className="h-6"
              />
              <img
                src={assets.certificate5}
                alt="Certificate 5 logo"
                className="h-6"
              />
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8">
            <button className="bg-[#007FDB] text-[18px] hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full">
              Download Dataset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;