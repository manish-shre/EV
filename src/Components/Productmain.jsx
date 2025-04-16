import React from "react";
import { assets } from "../assets/assets"; // Import the assets object

const products = [
  {
    id: 1,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "EVB Floor-Mounted 3 Guns EV DC Fast Charging with power range from 82kW to 262kW.",
    image: assets.product1,
  },
  {
    id: 2,
    title: "Floor Mounted 2 Guns DC EV Charger",
    desc: "Compact and efficient wall-mounted DC EV charger with power range from 22kW to 50kW.",
    image: assets.product2,
  },
  {
    id: 3,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "Portable DC EV charger with power range from 10kW to 30kW, ideal for on-the-go charging.",
    image: assets.product2,
  },
  {
    id: 4,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "Ultra-fast DC EV charger with power range from 150kW to 350kW for high-speed charging.",
    image: assets.product2,
  },
  {
    id: 5,
    title: "Floor Mounted 3 Guns DC EV Charger",
    desc: "Compact DC EV charger with power range from 50kW to 100kW for small spaces.",
    image: assets.product2,
  },
];

const EVProductSlider = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-30 text-center font-['Lexend_Deca']">
      <p className="text-[#004C83] font-medium mb-12"> DC EV Charging Series</p>
      <h2 className="text-[28px] font-semi-bold mb-12 text-gray-800">
      DC EV Charging Series
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-8 rounded-2xl shadow-md text-left h-full"
          >
            <a href={`/product/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-contain mb-6 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              />
            </a>
            <a href={`/product/${product.id}`} className="block">
              <h3 className="text-[22px] font-semi-bold text-gray-800 mb-3 hover:text-[#007FDB] overflow-hidden">
                {product.title}
              </h3>
            </a>
            <p className="text-[18px] text-[#292929] opacity-60 mb-4">
              {product.desc}
            </p>
            <a
              href={`/product/${product.id}`}
              className="text-[#007FDB] font-medium inline-flex items-center hover:text-[#333333]"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EVProductSlider;