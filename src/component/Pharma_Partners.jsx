// Pharma_Partners.jsx

import card from "../assets/img/Pharma_Partners/card.png";
import frame from "../assets/img/Pharma_Partners/Frame.png";


function Pharma_Partners() {
    return (
        <div className="relative bg-[#f9f9f9] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Pharma Partners Say
                    </h1>
                    <h2 className="text-2xl text-gray-600">
                        Driving Transformations, One Brand at a Time
                    </h2>
                </div>

                {/* Get Started Button */}
                <div className="text-center ">
                    <img src={card} alt=""  />
                </div>

                <div className="flex items-center justify-center">
                <img src={frame} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Pharma_Partners;