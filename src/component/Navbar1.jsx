
// NNavbar1.jsx
// Navbar1.jsx

import React from "react";
import navbarImage from "../assets/img/Navbar_img/navbar.png";

function Navbar1() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo/Brand - Left side */}
                    <div className="flex-shrink-0 flex items-center">
                        <img 
                            src={navbarImage} 
                            alt="Company logo" 
                            className="h-8 md:h-10 w-auto"  // Responsive logo sizing
                        />
                    </div>

                    {/* Contact Button - Right side */}
                    <div className="flex items-center">
                        <a
                            href="#contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-md font-medium transition-colors duration-200 text-sm md:text-base"
                        >
                            Contact us
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar1;