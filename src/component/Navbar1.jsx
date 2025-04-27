
// Navbar1.jsx
import React from "react";
import brand from "../assets/img/End/brand.png";

function Navbar1() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24 lg:h-28"> {/* Increased heights */}
                    {/* Logo/Brand - Left side */}
                    <div className="flex-shrink-0 flex items-center">
                        <img 
                            src={brand} 
                            alt="Company logo" 
                            className="h-28 w-auto md:h-36 lg:h-40" 
                        />
                    </div>

                    {/* Contact Button - Right side */}
                    <div className="flex items-center space-x-6"> {/* Increased space between items */}
                        <a
                            href="#contact"
                            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-5 md:py-3 rounded-md font-medium transition-colors duration-200 text-sm md:text-base whitespace-nowrap shadow-md hover:shadow-lg"
                            aria-label="Contact us"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar1;

