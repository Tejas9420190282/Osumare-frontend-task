
//Diving_Property2.jsx
import React from "react";
import icon1 from "../assets/img/Diving_Property2/icon1.png";
import icon2 from "../assets/img/Diving_Property2/icon2.png";
import icon3 from "../assets/img/Diving_Property2/icon3.png";
import icon4 from "../assets/img/Diving_Property2/icon4.png";

function Diving_Property2() {
    const features1 = [
        {
            img: icon1,
            head: "Call-to-Action Optimization",
            para: "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.",
        },
        {
            img: icon2,
            head: "Landing Page Efficiency",
            para: "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.",
        },
        {
            img: icon3,
            head: "Social Proof Utilization",
            para: "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action.",
        },
        {
            img: icon4,
            head: "Mobile-Friendly Experience",
            para: "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.",
        },
    ];


    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Driving Property Inquiries to Conversions
                    </h1>
                    <p className="text-xl text-gray-600">Kishori Tipugade</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {features1.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 h-full"
                        >
                            <div className="flex flex-col items-center text-center">
                                {/* Feature Icon */}
                                <div className="mb-6 w-16 h-16 flex items-center justify-center">
                                    <img 
                                        src={feature.img} 
                                        alt={feature.head} 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                
                                {/* Feature Content */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {feature.head}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.para}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Diving_Property2;


