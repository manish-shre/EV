import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { assets } from '../assets/assets'; // Ensure this path is correct
import Contentcompany from '../Components/Contentcompany';
import Companycontent from '../Components/Companycontent';
import Companyservice from '../Components/Companyservice';

export const Company = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full h-[250px] sm:h-[400px] md:h-[400px] lg:h-[350px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/banner_company.png')" }}
        id="Header"
      >
        <div className="absolute inset-4 flex flex-col justify-center px-4 sm:px-8 lg:px-43 mt-20">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold text-left mb-22">
            Company
          </h1>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            className="text-white"
            sx={{
              '& .MuiBreadcrumbs-separator': { color: 'white' }, // Separator color
            }}
          >
            <Link
              underline="hover"
              href="/"
              sx={{
                color: 'white',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#dddddd', // Tailwind's gray-700 equivalent
                },
              }}
            >
              Home
            </Link>
            <Typography
              color="white"
              sx={{
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Company
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <Contentcompany />
      <Companycontent />
      <Companyservice />
      {/* Background Banner */}
      <div className='py-25'>
      <div
        className="relative bg-cover bg-center text-white px-4 sm:px-6 py-20 sm:py-40"
        style={{
          backgroundImage: `url(${assets.banner_company})`,
        }}
      >
        <div className="max-w-4xl mx-6 px-4 sm:px-12 lg:px-20">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[74px] font-bold leading-tight mb-4 sm:mb-6 lg:text-left text-center">
            Accelerate Your<br /> Business Growth
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed lg:text-left text-center">
            Join the revolution in green energy. Our EV charging solutions empower businesses to lead in sustainability
            while enhancing user experience and convenience. With state-of-the-art technology and robust manufacturing,
            we provide seamless, ultra-fast charging solutions tailored to your needs.
          </p>
        </div>
        <div>
        </div>
        </div>
      </div>
    

    </>
  );
};