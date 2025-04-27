
// End.jsx

import React from 'react';
import brand from "../assets/img/End/brand.png";
import facebook from "../assets/img/End/facebook.png";
import mail from "../assets/img/End/mail.png";
import phone from "../assets/img/End/phone.png";
import whatsapp from "../assets/img/End/whatsapp.png";
import X from "../assets/img/End/X.png";
import youtube from "../assets/img/End/youtube.png";

function End() {
    return (
        <footer className="bg-[#e6f1fd] py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Brand Info Column */}
                    <div className="lg:w-1/3">
                        <img src={brand} alt="Osumare Logo" className="h-16 w-auto mb-6"/>
                        <p className="text-gray-700 mb-6">
                            The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
                        </p>
                        
                        <div className="space-y-3">
                            <h3 className="font-bold text-gray-900">Address</h3>
                            <p className="text-gray-700">
                                Survey No. 43, Pathare Thube Nagar,<br />
                                Nagar Road, Kharadi,<br />
                                Pune-14, Maharastra, India.
                            </p>
                            
                            <h3 className="font-bold text-gray-900 mt-4">Contacts</h3>
                            <div className="flex items-center gap-2 text-gray-700">
                                <img src={mail} alt="Email" className="h-5 w-5"/>
                                <span>hello@osumare.in</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <img src={phone} alt="Phone" className="h-5 w-5"/>
                                <span>+91 8459 8762 26</span>
                            </div>
                        </div>
                    </div>

                    {/* Menu Column */}
                    <div className="lg:w-1/3">
                        <h3 className="font-bold text-xl text-gray-900 mb-6">Menu</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <p className="font-medium text-gray-700">Home</p>
                                <p className="font-medium text-gray-700">About</p>
                            </div>
                            
                        </div>
                        <div className="mt-4 space-y-3">
                            <p className="font-medium text-gray-700">Services</p>
                            <p className="font-medium text-gray-700">Work</p>
                            <p className="font-medium text-gray-700">Blog</p>
                            <p className="font-medium text-gray-700">Career</p>
                        </div>
                    </div>

                    {/* Social Media Column */}
                    <div className="lg:w-1/3">
                        <h3 className="font-bold text-xl text-gray-900 mb-6">Connect With Us</h3>
                        <div className="flex gap-4 mb-6">
                            <a href="#">
                                <img src={facebook} alt="Facebook" className="h-8 w-8 hover:opacity-80 transition"/>
                            </a>
                            <a href="#">
                                <img src={X} alt="X" className="h-8 w-8 hover:opacity-80 transition"/>
                            </a>
                            <a href="#">
                                <img src={youtube} alt="YouTube" className="h-8 w-8 hover:opacity-80 transition"/>
                            </a>
                            <a href="#">
                                <img src={whatsapp} alt="WhatsApp" className="h-8 w-8 hover:opacity-80 transition"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-600">
                    <p>© 2023 Osumare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default End;


/* 
import React from 'react'
import brand from "../assets/img/End/brand.png";
import facebook from "../assets/img/End/facebook.png";
import mail from "../assets/img/End/mail.png";
import phone from "../assets/img/End/phone.png";
import whatsapp from "../assets/img/End/whatsapp.png";
import X from "../assets/img/End/X.png";
import youtube from "../assets/img/End/youtube.png";

function End() {
    return (
        <>
            <div className='flex justify-between items-center bg-[#e6f1fd] w-[90%]'>
                <div className='flex flex-col'>
                    {/* brand 
                    <img src={brand} alt='' className='size-36' />

                </div>

                <div>
                    {/* menu 
                    <p></p>
                </div>

                <div>
                    {/* Social 
                </div>
            </div>
        </>
    )
}

export default End
 */