import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";

const Navbar = () => {
    const [showmobilemenu, setshowmobilemenu] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = showmobilemenu ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [showmobilemenu]);

    const scrollToHash = (hash) => {
        const el = document.querySelector(hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleClick = (name, href, onClick) => {
        setActiveLink(name);
        setshowmobilemenu(false);

        // If external route (like /crypto or /events), navigate normally
        if (href.startsWith("/")) {
            navigate(href);
            return;
        }

        // If already on home page
        if (location.pathname === "/") {
            onClick ? onClick() : scrollToHash(href);
        } else {
            // Navigate to home page with state
            navigate("/", { state: { hash: href } });
        }
    };

    const navItems = [
        { name: "Home", href: "#Header" },
        { name: "About", href: "#About" },
        { name: "Projects", href: "#Projects" },
        { name: "Crypto", href: "/crypto" },
        { name: "Events", href: "/events" },
        { name: "Testimonials", href: "#Testimonials" },
        { name: "Contact Us", href: "#contact", onClick: () => scrollToHash("#contact") }
    ];

    return (
        <div
            className="fixed top-0 left-0 w-full z-50"
            style={{
                background: "linear-gradient(to right, #0d4752, #105561)",
            }}
        >
            <div className="w-full flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-28">
                <div className="flex items-center">
                    <a href="#Header" className="flex-shrink-0">
                        <img
                            src={assets.logo}
                            alt="Logo"
                            className="w-28 h-12 sm:w-32 sm:h-14 lg:w-36 lg:h-16 xl:w-40 xl:h-20 object-contain cursor-pointer"
                        />
                    </a>
                </div>

                <ul className="hidden lg:flex items-center gap-2 xl:gap-3 ml-auto flex-nowrap">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(item.name, item.href, item.onClick)}
                            className={`w-[110px] text-center px-2 py-1 text-sm xl:text-base font-normal rounded-full transition-all duration-300 ${
                                activeLink === item.name ? 'bg-[#c6e2e0] text-black' : 'text-white bg-white/10'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </ul>

                <img
                    onClick={() => setshowmobilemenu(true)}
                    src={assets.menu_icon}
                    className="lg:hidden w-7 h-7 cursor-pointer"
                    alt="Menu Icon"
                />
            </div>

            <div className={`fixed inset-0 z-40 bg-black/80 transition-transform duration-500 ${showmobilemenu ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end p-4 sm:p-6">
                    <img
                        onClick={() => setshowmobilemenu(false)}
                        className="w-8 cursor-pointer"
                        src={assets.cross_icon}
                        alt="Close Menu"
                    />
                </div>

                <ul className="flex flex-col items-center gap-6 mt-8 text-xl font-normal">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(item.name, item.href, item.onClick)}
                            className={`w-36 text-center px-8 py-4 rounded-full text-xl font-normal transition-all duration-300 ${
                                activeLink === item.name ? 'bg-[#c6e2e0] text-black' : 'text-white bg-white/10'
                            }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
