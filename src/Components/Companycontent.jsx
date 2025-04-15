import React from "react";
import { assets } from "../assets/assets";

const Companycontent = () => {
    return (
        <div className="py-25 px-6 md:px-12 lg:px-24">
            <h2 className="text-[24px] md:text-[28px] font-medium text-center text-[#333333] mb-6">
                GLOBAL MARKET REACH
            </h2>
            <p className="text-center max-w-5xl mx-auto text-[#292929] opacity-60 text-base md:text-lg mb-6">
                As a Chinese EV charger company with a global presence, EVB empowers the success of numerous battery storage and EV
                charging system projects across Australia, Germany, France, Poland, the UK, the USA, Brazil, South Africa, the Philippines,
                Thailand, Middle East Countries, and much more.
            </p>

            {/* Image Section */}
            <div className="py-4 px-2 mx-auto max-w-screen-2xl sm:py-4 lg:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                    {/* First Card */}
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-120 flex flex-col">
                        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                            <img
                                src={assets.c1} // Use the imported image here
                                alt="Image1"
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-6s0">
                        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 md:h-58 pb-4 pt-40 mb-4">
                            <img
                                src={assets.c2} // Use the imported image here
                                alt="Image2"
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 md:h-58 ">
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img
                                    src={assets.c3} // Use the imported image here
                                    alt="Image3"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 md:h-58 ">
                                <img
                                    src={assets.c4} // Use the imported image here
                                    alt="Image4"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                        <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow md:h-120">
                            <img
                                src={assets.c5} // Use the imported image here
                                alt="Image5"
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companycontent;