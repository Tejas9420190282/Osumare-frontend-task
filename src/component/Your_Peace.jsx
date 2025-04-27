// Your_Peace.jsx

import React from "react";
import backgroundImg from "../assets/img/our_Service/Ellipse 170.png";

function Your_Peace() {
    return (
        <div className="relative bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-10">
                <img
                    src={backgroundImg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Peace of Mind
                    </h1>
                    <h2 className="text-2xl text-gray-600">
                        Your Through our conversion-focused strategies. we
                        ensure that property seekers are not just visitors, but
                        engaged prospects ready to make their next move in the
                        real estate market
                    </h2>
                </div>

                {/* Get Started Button */}
                <div className="text-center">
                    <a
                        href="#contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors duration-200"
                    >
                        Get started
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Your_Peace;
