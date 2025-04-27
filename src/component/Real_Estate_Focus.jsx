
// Real_Estate_Focus.jsx

// Real_Estate_Focus.jsx
import React from 'react';
import cuate from "../assets/img/real_Estate_Focus/cuate.png";

function Real_Estate_Focus() {
    return (
        <div className='bg-white py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Heading Section */}
                <div className='text-center mb-8 md:mb-12 lg:mb-16'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                        Real Estate-Focused Digital Mastery
                    </h1>
                    <div className='w-20 h-1 bg-blue-500 mx-auto'></div>
                </div>
                
                {/* Content Section */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16'>
                    {/* Image Column - Order changes on mobile */}
                    <div className='lg:w-1/2 order-2 lg:order-1'>
                        <img 
                            src={cuate} 
                            alt='Real estate digital marketing solutions' 
                            className='w-full h-auto max-w-lg lg:max-w-none mx-auto rounded-lg shadow-md'
                        />
                    </div>
                    
                    {/* Text Column */}
                    <div className='lg:w-1/2 space-y-5 md:space-y-6 lg:space-y-8 order-1 lg:order-2'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                            Unlock the Potential of Digital Real Estate Excellence
                        </h2>
                        
                        <div className='space-y-4'>
                            <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                                At Osumare, we understand that the real estate landscape demands a digital 
                                presence that aligns with the intricacies of property marketing.
                            </p>
                            <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                                Our range of specialized services is meticulously designed to catapult your brand's 
                                success in the ever-evolving digital property market.
                            </p>
                        </div>
                        
                        <div className='pt-2 md:pt-4'>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-3 rounded-md font-medium text-base md:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                aria-label="Get started with our real estate digital solutions"
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

export default Real_Estate_Focus;