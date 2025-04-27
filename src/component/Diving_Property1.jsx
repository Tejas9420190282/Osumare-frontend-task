
// Diving_Property1.jsx
// Driving_Property1.jsx
import React from "react";
import bro from "../assets/img/Diving_Property1/bro.png";

function Driving_Property1() {
    return (
        <div className="bg-white py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-14 lg:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                        Driving Property Inquiries to Conversions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Streamlined Strategies for Real Estate Success
                    </p>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 md:mt-6"></div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
                    {/* Image Column (switches order on mobile) */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <img
                            src={bro}
                            alt="Real estate conversion optimization strategies"
                            className="w-full h-auto max-w-md lg:max-w-none mx-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="lg:w-1/2 space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Optimized Path to Property Purchase
                        </h2>

                        <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                In the dynamic realm of real estate, the journey
                                from a property inquiry to a successful conversion
                                demands a well-crafted approach.
                            </p>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                At Osumare, we specialize in guiding potential buyers through this
                                journey seamlessly, maximizing
                                inquiries-turned-conversions with expert strategies.
                            </p>
                        </div>

                        <div className="pt-2 md:pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-md font-medium text-base md:text-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                aria-label="Get started with our conversion optimization strategies"
                            >
                                Get Started
                               
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Driving_Property1;

