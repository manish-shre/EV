import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const ExperienceSection = () => {
    return (
        <section className="font-['Lexend_Deca'] text-center py-15 md:py-25  overflow-hidden">
            {/* Section Header */}
            <p className="text-[#004C83] font-medium mb-4 tracking-wide">
                — About Us
            </p>
            <div className="max-w-7xl mx-auto px-4 py-25 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-x-hidden">
                {/* Left Column - Images */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[550px] overflow-hidden"
                >
                    {/* Background Shapes */}
                    <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-gradient-to-br from-blue-50 to-blue-100 rounded-[30px] transform rotate-3"></div>
                    <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[20px] transform -rotate-3"></div>

                    {/* Main Image - Center */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[10%] left-[25%] w-[50%] h-[50%] group z-10"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src={assets.aboutimg}
                            alt="Charger 1"
                            className="relative rounded-xl shadow-lg w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Left Image - Angled */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -3 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[30%] left-0 w-[35%] h-[35%] group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src={assets.aboutimg1}
                            alt="Charger 2"
                            className="relative rounded-xl shadow-lg w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Right Image - Angled */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src={assets.aboutimg}
                            alt="Charger 3"
                            className="relative rounded-xl shadow-lg w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </motion.div>

                    {/* Years of Experience - Floating Card */}
                    {/* <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute bottom-[5%] left-[35%] bg-white p-6 rounded-[12px] shadow-xl w-full max-w-[280px] group hover:shadow-2xl transition-all duration-300 z-20"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative">
                            <h2 className="text-5xl sm:text-4xl font-bold text-blue-800">
                                20 <span className="text-base font-normal text-blue-700">YEARS</span>
                            </h2>
                            <p className="uppercase text-xs sm:text-sm text-blue-600 tracking-wider mt-2">
                                Of Experiences
                            </p>
                        </div>
                    </motion.div> */}

                    {/* Decorative Elements */}
                    <div className="absolute top-[15%] right-[15%] w-6 h-6 bg-blue-400 rounded-full opacity-50"></div>
                    <div className="absolute bottom-[25%] left-[15%] w-4 h-4 bg-blue-300 rounded-full opacity-30"></div>
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
                className="relative bg-cover bg-center text-white px-4 sm:px-6 py-20 sm:py-40"
                style={{
                    backgroundImage: `url(${assets.bannerabout})`,
                }}
            >


                <div className="max-w-4xl mx-6 px-4 sm:px-12 lg:px-20">
                    <h1 className="text-[28px] sm:text-[36px] lg:text-[74px] font-bold leading-tight mb-4 sm:mb-6 lg:text-left text-center">
                        Charge the Future, <br /> Drive the Change
                    </h1>
                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed lg:text-left text-center">
                        With advanced fast EV chargers and robust production capabilities, we can greatly empower your business and
                        give you the edge to stand out. Join us to drive your success with EVB charging solutions.
                    </p>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;