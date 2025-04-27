
// Real_Estate_Success2.jsx
// Real_Estate_Success2.jsx
import React from 'react';
import frame3 from "../assets/img/real_Estate_Success/Frame 3.png";
import Header_image from "../assets/img/real_Estate_Success/Header_image.png";

function Real_Estate_Success2() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            {/* Hero Section - Centered Column Layout */}
            <section className="relative w-full py-12 md:py-16 lg:py-24 xl:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    {/* Content Container */}
                    <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-6xl">
                        {/* Text Content */}
                        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 w-full">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                Elevate{' '}
                                <span className="text-blue-500 font-bold">Real Estate Success</span>{' '}
                                with Osumare's Digital Expertise
                            </h1>
                            
                            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
                                Discover how our digital strategies can transform your real estate business
                            </p>

                            <a
                                href="#getstarted"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 text-lg md:text-xl w-auto md:w-48 text-center mt-4 md:mt-6"
                            >
                                Get started
                            </a>
                        </div>
                        
                        {/* Image Container */}
                        <div className="w-full flex justify-center mt-8 md:mt-12">
                            <img 
                                src={Header_image} 
                                alt="Real estate digital solutions" 
                                className="w-full max-w-4xl h-auto rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Real_Estate_Success2;