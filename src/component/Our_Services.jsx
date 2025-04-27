

// Our_Services.jsx

import React from "react";
import backgroundImg from "../assets/img/our_Service/Ellipse 170.png";
import AutomotiveSEO from "../assets/img/our_Service/content.png";
import PPC from "../assets/img/our_Service/Data driven.png";
import SocialAcceleration from "../assets/img/our_Service/Group 117.png";
import ContentExcellence from "../assets/img/our_Service/Social.png";
import EndToEnd from "../assets/img/our_Service/Solutions.png";
import DataDriven from "../assets/img/our_Service/Vector.png";
import VideoMarketing from "../assets/img/our_Service/Video.png";
import WebDesign from "../assets/img/our_Service/Web design.png";

function Our_Services() {
    const services = [
        {
            title: "Automotive SEO",
            description: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
            img: AutomotiveSEO
        },
        {
            title: "PPC Precision",
            description: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
            img: PPC
        },
        {
            title: "Social Acceleration",
            description: "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
            img: SocialAcceleration
        },
        {
            title: "Content Excellence",
            description: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
            img: ContentExcellence
        },
        {
            title: "Web Design",
            description: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
            img: WebDesign
        },
        {
            title: "Data-Driven Insights",
            description: "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
            img: DataDriven
        },
        {
            title: "End-to-End Solutions",
            description: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
            img: EndToEnd
        },
        {
            title: "Video marketing",
            description: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
            img: VideoMarketing
        }
    ];

    return (
        <div className="relative bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-10">
                <img src={backgroundImg} alt="background" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h1>
                    <h2 className="text-2xl text-gray-600">Strategies that Drive Property Market Excellence</h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                        >
                            <div className="mb-4">
                                <img 
                                    src={service.img} 
                                    alt={service.title} 
                                    className="w-12 h-12 object-contain" 
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 flex-grow">{service.description}</p>
                        </div>
                    ))}
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

export default Our_Services;