
// Connect.jsx
import React from "react";

function Connect() {
    return (
        <div className="relative bg-[#f9f9f9] py-16 px-4 sm:px-8 lg:px-8 overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
                {/* Heading Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Connect with Our Digital Marketing Experts
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-gray-600">
                        Reach Out for Tailored Strategies and Results-Driven Solutions.<br />
                        Let's Elevate Your Online Presence Together
                    </h2>
                </div>

                {/* Form Section */}
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>

                        {/* Vehicles Field */}
                        <div>
                            <label htmlFor="vehicles" className="block text-sm font-medium text-gray-700 mb-1">
                                Enter your Total No of Vehicles:
                            </label>
                            <input
                                type="number"
                                id="vehicles"
                                placeholder="Number of vehicles"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Enter your Message"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors duration-200 w-full sm:w-auto"
                        >
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connect;

