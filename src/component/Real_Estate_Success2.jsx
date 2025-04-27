
// Real_Estate_Success2.jsx

// Real_Estate_Success2.jsx
import React from 'react';
import frame3 from "../assets/img/real_Estate_Success/Frame 3.png";
import Header_image from "../assets/img/real_Estate_Success/Header_image.png";

function Real_Estate_Success2() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            {/* Hero Section - Centered Column Layout */}
            <section className="relative w-full py-16 md:py-24 lg:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    {/* Image Stack - Centered and Column Layout */}
                    <div className="flex flex-col justify-center items-center gap-12 w-full max-w-4xl ">
                        {/* Top Image - Frame 3 */}
                        <div className="w-full flex flex-col justify-center">
                            <spam className="text-3xl flex flex-col text-center"><p>Elevate&nbsp;</p><p className='text-blue-500 font-bold'>Real Estate Success</p> <p>with Osumare's Digital Expertise</p></spam>

                            <a
                            href="#getstarted"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 w-30 justify-center mx-auto mt-5"
                        >
                            Get started
                        </a>
                        </div>
                        
                        {/* Bottom Image - Header Image */}
                        <div className="w-150 flex justify-center">
                            <img 
                                src={Header_image} 
                                alt="Header" 
                                className="w-full max-w-2xl h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
}

export default Real_Estate_Success2;

/* 
// Real_Estate_Success2.jsx
import React from 'react';
import frame3 from "../assets/img/real_Estate_Success/Frame 3.png";
import Header_image from "../assets/img/real_Estate_Success/Header_image.png";

function Real_Estate_Success2() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section
            <section className="relative py-16 md:py-24 lg:py-32 flex items-center justify-center flex-col ">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                         {/* Text Content 
                        <div className="md:w-1/2 space-y-6">
                            <img src={frame3} alt='Frame' className="w-full h-auto rounded-lg "  />
                        </div> 
                    </div>
                </div>
                
                {/* Decorative Element 
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                    <img 
                        src={frame3} 
                        alt="Decorative element" 
                        className="w-full max-w-6xl opacity-10"
                    />
                </div>
            </section>
        </div>
    );
}

export default Real_Estate_Success2;
 */