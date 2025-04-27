
// Frequently_Asked.jsx

import React from 'react'
import faq from "../assets/img/Frequently_Asked/Faq.png";

function Frequently_Asked() {
    return (
        <div className="relative bg-[#f9f9f9] py-16 px-4 sm:px-8 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Pharma Partners Say
                    </h1>
                    <h2 className="text-2xl text-gray-600">
                        Driving Transformations, One Brand at a Time
                    </h2>
                </div>

                {/* Get Started Button */}
                <div className="text-center ">
                    <img src={faq} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Frequently_Asked
