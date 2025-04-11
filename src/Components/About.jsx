import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const ExperienceSection = () => {
    return (
        <section className="font-['Lexend_Deca'] text-center pb-30 overflow-hidden">
            {/* Section Header */}
            <p className="text-[#004C83] font-medium mb-4 tracking-wide">
                — About Us
            </p>
            <div className="max-w-7xl mx-auto px-4 py-30 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-x-hidden">
                {/* Left Column - Images */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative grid grid-cols-2 gap-4 items-end w-full"
                >
                    {/* Top Two Images */}
                    <div className="space-y-4">
                        <img
                            src={assets.aboutimg}
                            alt="Charger 1"
                            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={assets.aboutimg1}
                            alt="Charger 2"
                            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Single Large Image */}
                    <div className="row-span-2">
                        <img
                            src={assets.aboutimg}
                            alt="Charger 3"
                            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Years of Experience */}
                    <div className="absolute bottom-[-25px] left-0 md:left-[-20px] bg-white p-4 rounded-[6px] shadow-md w-full max-w-[240px]">
                        <h2 className="text-4xl sm:text-3xl font-bold text-blue-800">
                            20 <span className="text-base font-normal text-blue-700">YEARS</span>
                        </h2>
                        <p className="uppercase text-xs sm:text-sm text-blue-600 tracking-wide">
                            Of Experiences
                        </p>
                    </div>
                </motion.div>

                {/* Right Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-left"
                >
                    <h3 className="text-2xl sm:text-3xl font-medium text-gray-800">
                        Crafting the Ultimate Realm of EV
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-gray-700 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-6">
                        {[1, 2].map((item) => (
                            <div
                                key={item}
                                className="flex items-start bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div>
                                    <h4 className="font-medium text-[14px] sm:text-[18px] text-[#333333]">
                                        Crafting the Ultimate Realm of EV {item}
                                    </h4>
                                    <p className="text-[14px] text-gray-600 p-2">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mt-2 inline-flex items-center px-4 sm:px-2 py-3 border border-blue-600 text-blue-600 font-semibold rounded-[6px] hover:bg-blue-50 transition w-full max-w-[100%]"
                    >
                        <button className="flex items-center justify-center w-[40%] sm:w-[60px] h-8 sm:h-10 text-blue-700">
                            <Search size={24} />
                        </button>
                        <input
                            type="text"
                            placeholder="Search for your EV"
                            className="flex-grow py-2 border-none outline-none text-blue-600 text-[14px] sm:text-[16px]"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Banner */}
            <div
                className="relative bg-cover bg-center text-left text-white px-6 sm:px-12 py-50"
                style={{
                    backgroundImage: `url(${assets.bannerabout})`,
                }}
            >
                <div className="max-w-4xl px-6 sm:px-12 lg:px-20">
                    <h1 className="text-[36px] sm:text-[48px] lg:text-[74px] font-bold leading-tight mb-6">
                        Charge the Future,<br /> Drive the Change
                    </h1>
                    <p className="text-[16px] sm:text-[18px] leading-relaxed">
                        With advanced fast EV chargers and robust production capabilities, we can greatly
                        empower your business and give you the edge to stand out. Join us to drive your success
                        with EVB charging solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;