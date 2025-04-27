
// Navigating_Real_Estate.jsx

// Navigating_Real_Estate.jsx

import React from 'react';
import Frame from "../assets/img/Navigating_Real_Estate/Frame.png";
import flashlight from "../assets/img/Navigating_Real_Estate/flashlight.png";
import Group from "../assets/img/Navigating_Real_Estate/Group.png";
import phone from "../assets/img/Navigating_Real_Estate/phone.png";
import Group2 from "../assets/img/Navigating_Real_Estate/Group2.png";

function Navigating_Real_Estate() {
    const features = [
        {
            header: "Market Trends Analysis",
            para: "Predictive insights to guide real estate strategies.", 
            img: flashlight
        },
        {
            header: "Targeted Buyer Persona",
            para: "Understand and connect with your ideal property buyers.", 
            img: Group
        },
        {
            header: "Competitor Insights",
            para: "Stand out in the property market with informed strategies.", 
            img: phone
        },
        {
            header: "Visual Content Appeal",
            para: "Captivate buyers with appealing visuals and immersive experiences.", 
            img: Group2
        },
    ];

    return (
        <div className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Heading Section */}
                <div className='text-center mb-16'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-2'>
                        Navigating Real Estate's Digital Landscape
                    </h1>
                    <p className='text-2xl text-gray-600'>
                        Insights for Real Estate Marketing Advantage
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                    {/* Features List */}
                    <div className='lg:w-1/2'>
                        <div className='flex flex-col  gap-8'>
                            {features.map((feature, index) => (
                                <div key={index} className='bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all'>
                                    <div className='flex items-start gap-4'>
                                        <img 
                                            src={feature.img} 
                                            alt={feature.header} 
                                            className='w-12 h-12 object-contain'
                                        />
                                        <div>
                                            <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                                {feature.header}
                                            </h3>
                                            <p className='text-gray-600'>
                                                {feature.para}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className='lg:w-1/2'>
                        <img 
                            src={Frame} 
                            alt='Real estate digital marketing' 
                            className='w-full h-auto max-w-md mx-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigating_Real_Estate;