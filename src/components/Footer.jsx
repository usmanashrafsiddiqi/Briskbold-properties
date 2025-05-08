// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#f0faf9] text-black mt-0 pt-0">
      {/* Embedded Google Map */}
      <div className="w-full flex justify-center py-6">
        <div className="w-full max-w-screen-lg rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="BriskBold Properties Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.6417543176162!2d55.26689677154324!3d25.181571583117616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f699170ef3bc5%3A0x80b86613189c5d48!2sBRISKBOLD%20PROPERTIES!5e0!3m2!1sen!2sin!4v1746619227028!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-screen-lg mx-auto pt-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {/* Quick Links */}
          <div className="mr-6">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#0d4752] to-[#105561] bg-clip-text text-transparent">
              Quick Links
            </h2>
            <div>
              <a href="#Header" className="block mb-1 hover:text-blue-400">Home</a>
              <a href="#About" className="block mb-1 hover:text-blue-400">About Us</a>
              <a href="#Projects" className="block mb-1 hover:text-blue-400">Projects</a>
              <a href="#contact" className="block mb-1 hover:text-blue-400">Contact Us</a>
              <Link to="/privacy-policy" className="block mb-1 hover:text-blue-400">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="mr-6">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#0d4752] to-[#105561] bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div>
              <p className="mb-1">Email: bbpmarketing@briskboldproperties.com</p>
              <p className="mb-1">Phone: (+971) 56 924 2326</p>
              <p className="mb-1">Address: Business Bay, Dubai, UAE</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mr-6">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#0d4752] to-[#105561] bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h2>
            <div className="flex items-stretch mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full max-w-xs bg-white text-black border border-black rounded-l-md"
              />
              <button
                className="px-4 bg-gradient-to-r from-[#0d4752] to-[#105561] text-white rounded-r-md hover:bg-[#c6e2e0] hover:text-[#0d4752] border border-black transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6">
            {[
              { href: "https://www.facebook.com/profile.php?id=61573128565466&sk=about_details", icon: <FaFacebook size={24} />, hover: "hover:text-blue-400" },
              { href: "https://x.com/BB_Properties01", icon: <FaTwitter size={24} />, hover: "hover:text-blue-400" },
              { href: "https://www.linkedin.com/company/106345715/admin/dashboard/", icon: <FaLinkedin size={24} />, hover: "hover:text-blue-400" },
              { href: "https://youtube.com/@briskboldproperties01?si=luUiLXnThAXfwNJL", icon: <FaYoutube size={24} />, hover: "hover:text-red-500" },
              { href: "https://www.instagram.com/brisk_boldproperties", icon: <FaInstagram size={24} />, hover: "hover:text-pink-500" }
            ].map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                <button className={`p-2 text-white rounded-full bg-gradient-to-r from-[#0d4752] to-[#105561] transition-colors duration-200 ${item.hover}`}>
                  {item.icon}
                </button>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} — BriskBold-Properties</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
