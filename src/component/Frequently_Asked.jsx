

// Frequently_Asked.jsx

import React from 'react'
import faq from "../assets/img/Frequently_Asked/Faq.png";

function Frequently_Asked() {
    return (
        <div className="relative bg-[#f9f9f9] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading Section */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                        What Our Pharma Partners Say
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-600">
                        Driving Transformations, One Brand at a Time
                    </h2>
                </div>

                {/* FAQ Image - Now Responsive */}
                <div className="text-center px-4 sm:px-8">
                    <img 
                        src={faq} 
                        alt="Frequently asked questions" 
                        className="mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-lg shadow-md"
                    />
                </div>

               
            </div>
        </div>
    );
}

export default Frequently_Asked

