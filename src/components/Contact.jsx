import React from 'react';
import dubaiimg from '/dubai.png';
import canadaimg from '/canada.png';
import japanimg from '/japan.png';
import indianimg from '/india.png';
import unitedimg from '/united.png';

const locations = [
  {
    name: 'Dubai',
    address: [
      'Office 3507',
      'Churchill Executive Tower',
      'Business Bay, Dubai, UAE',
    ],
    mobile: '(+971) 554372731',
    whatsapp: '+971554372731',
    img: dubaiimg,
  },
  {
    name: 'Canada',
    address: [
      '100-4310, Sherwoodtowne Boulevard',
      'Mississauga, Ontario',
      'Canada, L4Z4C4',
    ],
    mobile: '(+1) 6474463712',
    whatsapp: '(+1) 6474463712',
    img: canadaimg,
  },
  {
    name: 'Japan',
    address: [
      '7th Floor Wakamatsu building',
      'Honchome 3-3-6, Chuo-ku',
      'Tokyo, Japan',
    ],
    mobile: '(+81) 8034365974',
    whatsapp: '(+81) 8034365974',
    img: japanimg,
  },
  {
    name: 'India',
    address: ['Delhi', 'Jammu & Kashmir'],
    mobile: '(+91)-9103163366',
    whatsapp: '(+91)-9103163366',
    img: indianimg,
  },
  {
    name: 'United States',
    address: ['3400 COTTAGE WAY, STE G2 #24309', 'Sacramento, CA 95825'],
    mobile: '(+1) 415 755 8939',
    img: unitedimg,
  },
];

export const Contact = () => {
  return (
    <div
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/connew.jpg')",
      }}
    >
      {/* Contact Us Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-gray-300 text-lg">Real stories from Those Who Found Home with Us</p>
      </div>

      {/* Locations */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-30 rounded-lg shadow-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all backdrop-blur-xl border border-transparent"
            style={{
              borderImage: 'linear-gradient(45deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3)) 1 stretch',
            }}
          >
            <div className="w-16 h-16 mb-4 overflow-hidden">
              <img
                src={location.img}
                alt={`${location.name} icon`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Location Name with Gradient Effect */}
            <h2 className="text-2xl font-bold text-white mb-2">
  {location.name}
</h2>
            {/* Location Address */}
            <div className="text-white text-center mb-4">
              {location.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            {/* Mobile Number */}
            <p className="text-white mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6l4.5 4.5L3 15"></path>
              </svg>
              {location.mobile}
            </p>

            {/* WhatsApp */}
            {location.whatsapp && (
              <p className="text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6l4.5 4.5L3 15"></path>
                </svg>
                {location.whatsapp}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* "Get In Touch" Section at the bottom */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
        <p className="text-white text-lg mb-4">
          If you want to contact us, email us at
          <br />
          <a
            href="mailto:info@briskboldit.com"
            className="text-blue-500 font-semibold"
          >
            info@briskboldit.com
          </a>
        </p>

        {/* Simple Contact Button */}
        <a
          href="mailto:hr@briskboldit.com"
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full"
        >
          Send Us an Email
        </a>
      </div>
    </div>
  );
};
