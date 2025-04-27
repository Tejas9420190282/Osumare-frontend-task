
// Real_Estate_Focus.jsx

import React from 'react';
import cuate from "../assets/img/real_Estate_Focus/cuate.png";

function Real_Estate_Focus() {
    return (
        <div className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold text-center text-gray-900 mb-2'>
                    Real Estate-Focused Digital Mastery
                </h1>
                
                <div className='flex flex-col lg:flex-row items-center justify-between mt-16 gap-12'>
                    <div className='lg:w-1/2'>
                        <img 
                            src={cuate} 
                            alt='Real estate digital marketing' 
                            className='w-full h-auto max-w-md mx-auto'
                        />
                    </div>
                    
                    <div className='lg:w-1/2 space-y-6'>
                        <h2 className='text-3xl font-bold text-gray-900'>
                            Unlock the Potential of Digital Real Estate Excellence
                        </h2>
                        
                        <p className='text-lg text-gray-600 leading-relaxed'>
                            At Osumare, we understand that the real estate landscape demands a digital 
                            presence that aligns with the intricacies of property marketing. Our range 
                            of specialized services is meticulously designed to catapult your brand's 
                            success in the ever-evolving digital property market.
                        </p>
                        
                        <div className='pt-4'>
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

export default Real_Estate_Focus;

/* 
import React from 'react'
import cuate from "../assets/img/real_Estate_Focus/cuate.png";

function Real_Estate_Focus() {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-bold text-2xl'>Real Estate-focused Digital Mastery</p>

                <div className='flex items-center justify-center mt-10 gap-12'>
                    <div>
                        {/* img 
                        <img src={cuate} alt='' className='' />
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>Unlock the Potential o Digital Real
                        Estate Excellence</p>
                        <p>At Osumare, we understand that the real estate landscape
demands a digital presence that aligns with the intricacies of
property marketing. Our range of specialized services is
meticulously designed to catapult your brand's success in the
ever-evolving digital property market. /n</p>
                    </div>
                    <a
                            href="#contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                        >
                            Get Contact 
                        </a>
                </div>
            </div>
        </>
    )
}

export default Real_Estate_Focus
 */