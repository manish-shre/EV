import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets"; // Import the assets object

const products = [
  {
    id: 1,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "EVB Floor-Mounted 3 Guns EV DC Fast Charging with power range from 82kW to 262kW.",
    image: assets.product1, // Use the image from the assets object
  },
  {
    id: 2,
    title: "Floor Mounted 2 Guns DC EV Charger",
    desc: "Compact and efficient wall-mounted DC EV charger with power range from 22kW to 50kW.",
    image: assets.product2, // Use the image from the assets object
  },
  {
    id: 3,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "Portable DC EV charger with power range from 10kW to 30kW, ideal for on-the-go charging.",
    image: assets.product2, // Use the image from the assets object
  },
  {
    id: 4,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "Ultra-fast DC EV charger with power range from 150kW to 350kW for high-speed charging.",
    image: assets.product2, // Use the image from the assets object
  },
  {
    id: 5,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "Compact DC EV charger with power range from 50kW to 100kW for small spaces.",
    image: assets.product2, // Use the image from the assets object
  },
];

const EVProductSlider = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-15 md:py-25 text-center font-['Lexend_Deca']">
      <p className="text-[#004C83] font-medium mb-12">— Our Product</p>
      <h2 className="text-[28px] font-semi-bold mb-12 text-gray-800">
        EVB EV Charging Series
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white p-8 rounded-2xl shadow-md text-left h-full mb-15">
              <Link to={`/Productdetail/${product.id}`} className="block">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-contain mb-6 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                />
              </Link>
              <Link to={`/Productdetail/${product.id}`} className="block">
                <h3 className="text-[22px] font-semi-bold text-gray-800 mb-3 hover:text-[#007FDB] overflow-hidden">
                  {product.title}
                </h3>
              </Link>
              <p className="text-[18px] text-[#292929] opacity-60 mb-4">
                {product.desc}
              </p>
              <Link
                to={`/Productdetail/${product.id}`}
                className="text-[#007FDB] font-medium inline-flex items-center hover:text-[#333333]"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EVProductSlider;