import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export const Productdetail = () => {
  // Static product data
  const product = {
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "EVB Floor-Mounted 3 Guns EV DC Fast Charging with power range from 82kW to 262kW.",
    image: "/assets/product1.jpg", // Replace with the correct path
  };

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[250px] sm:h-[400px] md:h-[400px] lg:h-[350px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/banner_product.png')" }}
        id="Header"
      >
        <div className="absolute inset-4 flex flex-col justify-center px-4 sm:px-8 lg:px-43 mt-25">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold text-left mb-12">
            {product.title}
          </h1>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            className="text-white"
            sx={{
              "& .MuiBreadcrumbs-separator": { color: "white" }, // Separator color
            }}
          >
            <Link
              underline="hover"
              href="/"
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#dddddd", // Tailwind's gray-700 equivalent
                },
              }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              href="/Product" // Corrected the link to point to the product listing page
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#dddddd", // Tailwind's gray-700 equivalent
                },
              }}
            >
              Product
            </Link>
            <Typography
              color="white"
              sx={{
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {product.title}
            </Typography>
          </Breadcrumbs>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-lg text-gray-700 mb-6">{product.desc}</p>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </>
  );
};