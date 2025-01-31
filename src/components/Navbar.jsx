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
                <img className='w-30 h-10' src={assets.logo} alt="" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <a
                        href="#Header"
                        className='cursor-pointer hover:text-gray-400 bg-white text-black px-6 py-1.5 rounded-full text-sm transition-all duration-300'
                    >
                        Home
                    </a>
                    <a
                        href="#About"
                        className='cursor-pointer hover:text-gray-400 bg-white text-black px-6 py-1.5 rounded-full text-sm transition-all duration-300'
                    >
                        About
                    </a>
                    <a
                        href="#Projects"
                        className='cursor-pointer hover:text-gray-400 bg-white text-black px-6 py-1.5 rounded-full text-sm transition-all duration-300'
                    >
                        Projects
                    </a>
                    <a
                        href="#Testimonials"
                        className='cursor-pointer hover:text-gray-400 bg-white text-black px-6 py-1.5 rounded-full text-sm transition-all duration-300'
                    >
                        Testimonials
                    </a>
                </ul>
                {/* Replace Sign Up with Contact Us button */}
                <button
                    onClick={scrollToContact}
                    className='hidden md:block bg-white px-8 py-2 rounded-full'
                >
                    Contact Us
                </button>
                <img onClick={() => { setshowmobilemenu(true) }} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${showmobilemenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img onClick={() => { setshowmobilemenu(false) }} className='w-6' src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a onClick={() => { setshowmobilemenu(false) }} href="#Header" className='px-4 py-2 rounded-full inline-block'> Home</a>
                    <a onClick={() => { setshowmobilemenu(false) }} href="#About" className='px-4 py-2 rounded-full inline-block'> About</a>
                    <a onClick={() => { setshowmobilemenu(false) }} href="#Projects" className='px-4 py-2 rounded-full inline-block'> Projects</a>
                    <a onClick={() => { setshowmobilemenu(false) }} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'> Testimonials</a>
                    {/* Mobile Contact Us Button */}
                    <a onClick={() => { setshowmobilemenu(false); scrollToContact(); }} className='px-4 py-2 rounded-full inline-block'>
                        Contact Us
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
