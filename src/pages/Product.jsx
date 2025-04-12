import { Breadcrumbs } from '@mui/material';
import React from 'react';
import { assets } from "../assets/assets"; // Import the assets object

export const Product = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/banner_product.png')" }}
        id="Header"
      >
        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
            Our Products
          </h1>
        </div>
      </div>

      {/* Breadcrumbs Section */}
      <div className="container mx-auto px-4 py-15 flex justify-center items-center">
        <Breadcrumbs aria-label="breadcrumb">
          <a href="/" className="text-blue-900 hover:underline text-[18px] font-medium">
            Home
          </a>
          <span className="text-grey-700">Products</span>
        </Breadcrumbs>
      </div>
    
    
    </>
  );
};