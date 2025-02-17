import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white text-black py-8 relative w-full mt-0">
      <div className="max-w-screen-lg mx-auto">
        {/* Quick Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          <div className="mr-6">
            <h2 className="text-2xl font-bold mb-2">
              Quick Links
            </h2>
            <div>
              <a href="#Header" className="block mb-1 hover:text-blue-400">Home</a>
              <a href="#About" className="block mb-1 hover:text-blue-400">About Us</a>
              <a href="#Projects" className="block mb-1 hover:text-blue-400">Projects</a>
              <a href="#contact" className="block mb-1 hover:text-blue-400">Contact Us</a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mr-6">
            <h2 className="text-2xl font-bold mb-2">
              Contact Us
            </h2>
            <div>
              <p className="mb-1">Email: info@briskboldit.com</p>
              <p className="mb-1">Phone: (+971) 554372731</p>
              <p className="mb-1">Address: Business Bay, Dubai, UAE</p>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="mr-6">
            <h2 className="text-2xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h2>
            <div className="flex items-center mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full max-w-xs bg-white text-black border border-black rounded-l-md"
              />
              <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-2 rounded-r-md transition-colors duration-300 hover:bg-gradient-to-l">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61573128565466&sk=about_details" target="_blank" rel="noopener noreferrer">
              <button className="p-1 hover:text-blue-500 transition-colors duration-200">
                <FaFacebook size={24} />
              </button>
            </a>

            <a href="https://x.com/BB_Properties01" target="_blank" rel="noopener noreferrer">
              <button className="p-1 hover:text-blue-500 transition-colors duration-200">
                <FaTwitter size={24} />
              </button>
            </a>

            <a href="https://www.linkedin.com/company/106345715/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <button className="p-1 hover:text-blue-500 transition-colors duration-200">
                <FaLinkedin size={24} />
              </button>
            </a>

            <a href="https://youtube.com/@briskboldproperties01?si=luUiLXnThAXfwNJL" target="_blank" rel="noopener noreferrer">
              <button className="p-1 hover:text-red-500 transition-colors duration-200">
                <FaYoutube size={24} />
              </button>
            </a>

            <a href="https://www.instagram.com/brisk_boldproperties?igsh=eXJzcWxkeHB6Mmkx
Login • Instagram
Welcome back to Instagram. Sign in to check out what your friends, family & interests have been capturing & sharing around the world.
 " target="_blank" rel="noopener noreferrer">
              <button className="p-1 hover:text-pink-500 transition-colors duration-200">
                <FaInstagram size={24} />
              </button>
            </a>

            
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} — BriskBold-Properties
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
