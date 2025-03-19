import React, { useEffect, useState } from 'react';
import { assets } from "../assets/assets";

const Navbar = () => {
    const [showmobilemenu, setshowmobilemenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showmobilemenu ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [showmobilemenu]);

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="w-full flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-28">

                {/* 🌟 Logo on the extreme left */}
                <div className="flex items-center">
                    <a href="#Header" className="flex-shrink-0">
                        <img
                            src={assets.logo}
                            alt="Logo"
                            className="w-28 h-12 sm:w-32 sm:h-14 lg:w-36 lg:h-16 xl:w-40 xl:h-20 object-contain cursor-pointer"
                        />
                    </a>
                </div>

                {/* 🌐 Desktop Navigation (hidden below 900px) */}
                <ul className="hidden lg:flex items-center gap-4 xl:gap-8 ml-auto">
                    {[
                        { name: "Home", href: "#Header" },
                        { name: "About", href: "#About" },
                        { name: "Projects", href: "#Projects" },
                        { name: "Testimonials", href: "#Testimonials" },
                        { name: "Contact Us", href: "#contact", onClick: scrollToContact },
                        { name: "Crypto", href: "/crypto", gradient: true },
                        { name: "Events", href: "/events", gradient: true }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={item.onClick}
                            className={`px-4 lg:px-5 xl:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                                ${item.gradient
                                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white"
                                    : "bg-white text-black hover:bg-gray-200"
                                }`
                            }
                        >
                            {item.name}
                        </a>
                    ))}
                </ul>

                {/* 📱 Mobile Menu Icon (visible at 900px and below) */}
                <img
                    onClick={() => setshowmobilemenu(true)}
                    src={assets.menu_icon}
                    className="lg:hidden w-7 h-7 cursor-pointer"
                    alt="Menu Icon"
                />
            </div>

            {/* 📱 Mobile & Tablet Menu (below 900px) */}
            <div className={`fixed inset-0 z-40 bg-black/80 transition-transform duration-500 ${showmobilemenu ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end p-4 sm:p-6">
                    <img
                        onClick={() => setshowmobilemenu(false)}
                        className="w-8 cursor-pointer"
                        src={assets.cross_icon}
                        alt="Close Menu"
                    />
                </div>

                <ul className="flex flex-col items-center gap-6 mt-8 text-lg font-bold text-white">
                    {[
                        { name: "Home", href: "#Header" },
                        { name: "About", href: "#About" },
                        { name: "Projects", href: "#Projects" },
                        { name: "Testimonials", href: "#Testimonials" },
                        { name: "Contact Us", href: "#contact", onClick: scrollToContact },
                        { name: "Crypto", href: "/crypto" },
                        { name: "Events", href: "/events" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => { setshowmobilemenu(false); item.onClick?.(); }}
                            className="px-8 py-4 rounded-full bg-white text-black shadow-lg hover:scale-105 
                                hover:bg-purple-500 transition-all duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
