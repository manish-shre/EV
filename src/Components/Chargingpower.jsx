import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion'; 

const Chargingpower = () => {
    const [selectedImage, setSelectedImage] = useState(assets.product1);
    const [selectedPower, setSelectedPower] = useState('150 KW');

    // Power level data mapping
    const powerData = {
        '60 KW': {
            chargingTime: '25 min',
            distance: '30 km',
        },
        '90 KW': {
            chargingTime: '20 min',
            distance: '40 km',
        },
        '120 KW': {
            chargingTime: '15 min',
            distance: '45 km',
        },
        '150 KW': {
            chargingTime: '10 min',
            distance: '55 km',
        },
        '180 KW': {
            chargingTime: '8 min',
            distance: '65 km',
        },
        '240 KW': {
            chargingTime: '5 min',
            distance: '80 km',
        },
    };

    // Animation variants
    const powerInfoVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
            },
        },
    };

    // Button hover animation
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 space-y-4">
                    <div className="space-y-0">
                        <p className="text-lg sm:text-xl font-medium mb-2 text-[#004C83]">
                            Charging Power
                        </p>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedPower}
                                variants={powerInfoVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="flex gap-25    sm:gap-70 sm:w-[550px]"
                            >
                                <div className="text-center relative overflow-hidden">
                                    <h1 className="text-[36px] sm:text-[36px] font-bold">
                                        {powerData[selectedPower].chargingTime}
                                    </h1>
                                    <div className="text-[16px] sm:text-[16px] text-gray-500">Charging Time</div>
                                </div>
                                <div className="text-center relative overflow-hidden">
                                    <h1 className="text-[36px] sm:text-[36px] font-bold">
                                        {powerData[selectedPower].distance}
                                    </h1>
                                    <div className="text-[16px] sm:text-[16px] text-gray-500">Distance</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Power Options - Enhanced UI and Responsiveness */}
                    <div className="space-y-0">
                        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 sm:w-[500px]">
                            {Object.keys(powerData).map((power) => (
                                <motion.button
                                    key={power}
                                    variants={buttonVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: '0 4px 12px rgba(0, 127, 219, 0.15)'
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedPower(power)}
                                    className={` relative w-full py-3 sm:py-4 rounded-xl transition-all duration-300  ${power === selectedPower
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                                        }
        `}
                                >
                                    {/* Power Value */}
                                    <div className="relative z-10">
                                        <p className={`text-base sm:text-lg font-semibold mb-4 ${power === selectedPower ? 'text-white' : 'text-gray-800'}
          `}>
                                            {power.split(' ')[0]}
                                        </p>
                                        <p className={`text-xs sm:text-sm font-medium ${power === selectedPower ? 'text-blue-100' : 'text-gray-500'}
          `}>
                                            KW
                                        </p>
                                    </div>

                                    {/* Selected Indicator */}
                                    {power === selectedPower && (
                                        <motion.div
                                            layoutId="selectedIndicator"
                                            className="absolute inset-0 rounded-xl"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info Card with Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-50 rounded-lg p-0 mt-0"
                    >
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Chargingpower;