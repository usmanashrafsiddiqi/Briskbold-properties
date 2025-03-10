import React, { useEffect, useState } from 'react';
import { assets } from "../assets/assets";

const Navbar = () => {
    const [showmobilemenu, setshowmobilemenu] = useState(false);

    useEffect(() => {
        if (showmobilemenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showmobilemenu]);

    // Scroll to the Contact section
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <a href="#Header">
                    <img 
                        className="w-30 h-10 cursor-pointer" 
                        src={assets.logo} 
                        alt="Logo"
                    />
                </a>
                <ul className='hidden md:flex gap-7 text-white'>
                    {/* Navbar items with white background */}
                    <a
                        href="#Header"
                        className='cursor-pointer hover:bg-gray-200 text-black bg-white px-6 py-2 rounded-full text-sm transition-all duration-300 nav_link'
                    >
                        Home
                    </a>
                    <a
                        href="#About"
                        className='cursor-pointer hover:bg-gray-200 text-black bg-white px-6 py-2 rounded-full text-sm transition-all duration-300 nav_link'
                    >
                        About
                    </a>
                    <a
                        href="#Projects"
                        className='cursor-pointer hover:bg-gray-200 text-black bg-white px-6 py-2 rounded-full text-sm transition-all duration-300 nav_link'
                    >
                        Projects
                    </a>
                    <a
                        href="#Testimonials"
                        className='cursor-pointer hover:bg-gray-200 text-black bg-white px-6 py-2 rounded-full text-sm transition-all duration-300 nav_link'
                    >
                        Testimonials
                    </a>
                    {/* Contact Us with white background */}
                    <a
                        href="#contact"
                        className='cursor-pointer hover:bg-gray-200 text-black bg-white px-6 py-2 rounded-full text-sm transition-all duration-300 nav_link'
                        onClick={scrollToContact}
                    >
                        Contact Us
                    </a>
                </ul>
                <img onClick={() => { setshowmobilemenu(true) }} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="Menu Icon" />
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${showmobilemenu ? 'fixed w-full top-0 right-0 bottom-0' : 'h-0 w-0'} overflow-hidden transition-all duration-500 bg-gradient-to-br from-[#FFB6C1] via-[#FFC3A0] to-[#FFE156] opacity-90`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => { setshowmobilemenu(false) }} className='w-8 animate-spin-slow' src={assets.cross_icon} alt="Close Menu" />
                </div>
                <ul className='flex flex-col items-center gap-6 mt-8 text-xl font-bold text-gray-800'>
                    <a 
                        onClick={() => { setshowmobilemenu(false) }} 
                        href="#Header" 
                        className='px-8 py-4 rounded-full inline-block bg-white shadow-lg hover:scale-105 hover:bg-[#ff7f50] transition-all duration-300 transform'
                    >
                        Home
                    </a>
                    <a 
                        onClick={() => { setshowmobilemenu(false) }} 
                        href="#About" 
                        className='px-8 py-4 rounded-full inline-block bg-white shadow-lg hover:scale-105 hover:bg-[#ff7f50] transition-all duration-300 transform'
                    >
                        About
                    </a>
                    <a 
                        onClick={() => { setshowmobilemenu(false) }} 
                        href="#Projects" 
                        className='px-8 py-4 rounded-full inline-block bg-white shadow-lg hover:scale-105 hover:bg-[#ff7f50] transition-all duration-300 transform'
                    >
                        Projects
                    </a>
                    <a 
                        onClick={() => { setshowmobilemenu(false) }} 
                        href="#Testimonials" 
                        className='px-8 py-4 rounded-full inline-block bg-white shadow-lg hover:scale-105 hover:bg-[#ff7f50] transition-all duration-300 transform'
                    >
                        Testimonials
                    </a>
                    {/* Mobile Contact Us */}
                    <a 
                        onClick={() => { setshowmobilemenu(false); scrollToContact(); }} 
                        className='px-8 py-4 rounded-full inline-block bg-white shadow-lg hover:scale-105 hover:bg-[#ff7f50] transition-all duration-300 transform'
                    >
                        Contact Us
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
