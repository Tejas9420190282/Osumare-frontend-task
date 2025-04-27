// Diving_Property1.jsx

import React from "react";
import bro from "../assets/img/Diving_Property1/bro.png";

function Diving_Property1() {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
                    Driving Property Inquiries to Conversions
                </h1>
                <p className="text-center">
                    Streamlined Strategies for Real Estate Success
                </p>

                <div className="flex flex-col lg:flex-row items-center justify-between mt-16 gap-12">
                    <div className="lg:w-1/2">
                        <img
                            src={bro}
                            alt="Real estate digital marketing"
                            className="w-full h-auto max-w-md mx-auto"
                        />
                    </div>

                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Optimized Path to Property Purchase
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            In the dynamic realm of real estate, the journey
                            from a property inquiry to a successful conversion
                            demands a well- crafted approach. At Osumare, we
                            specialize in guiding potential buyers through this
                            journey seamlessly, maximizing
                            inquiries-turned-conversions with expert strategies.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors duration-200"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Diving_Property1;
