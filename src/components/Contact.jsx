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
    mobile: '(+81)7036162428',
    whatsapp: '(+81)7036162428',
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
        backgroundImage: "url('/contactbg.jpg')",
      }}
    >
      {/* Contact Us Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-gray-300 text-lg">
          Real stories from Those Who Found Home with Us
        </p>
      </div>

      {/* Locations */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-30 rounded-2xl shadow-xl p-6 hover:scale-105 transform transition-all border border-white/20 text-left backdrop-blur-xs"
          >
            {/* Header: Flag + Country Name */}
            <div className="flex items-center mb-4 gap-3">
              <img
                src={location.img}
                alt={`${location.name} icon`}
                className="w-10 h-10 object-cover rounded-full"
              />
              <h2 className="text-3xl font-bold text-white">{location.name}</h2>
            </div>

            {/* Address */}
            <div className="text-white text-lg mb-4">
              {location.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            {/* Mobile Number with Phone Icon */}
            <p className="text-white text-lg mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-blue-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2l2 5-2 1a11 11 0 005 5l1-2 5 2v2a2 2 0 01-2 2h-1c-6.075 0-11-4.925-11-11V5z"
                />
              </svg>
              {location.mobile}
            </p>

            {/* WhatsApp */}
            {location.whatsapp && (
              <p className="text-white text-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.472 13.772c-.264-.132-1.563-.772-1.805-.86-.242-.088-.418-.132-.595.132-.176.264-.682.86-.836 1.036-.154.176-.308.198-.572.066-.264-.132-1.113-.41-2.12-1.31-.784-.7-1.31-1.564-1.464-1.828-.154-.264-.017-.406.115-.538.118-.117.264-.308.396-.462.132-.154.176-.264.264-.44.088-.176.044-.33-.022-.462-.066-.132-.595-1.435-.816-1.96-.215-.512-.434-.442-.595-.45l-.508-.01c-.176 0-.462.066-.705.33-.242.264-.924.902-.924 2.2s.946 2.552 1.078 2.728c.132.176 1.86 2.844 4.508 3.988.63.272 1.122.435 1.504.556.632.2 1.208.172 1.662.104.508-.076 1.563-.638 1.785-1.252.22-.614.22-1.14.154-1.252-.066-.112-.242-.176-.506-.308z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.486 2 12c0 2.117.662 4.072 1.793 5.703L2 22l4.412-1.784A9.953 9.953 0 0012 22c5.523 0 10-4.486 10-10S17.523 2 12 2zm-8 10c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8a7.964 7.964 0 01-4.288-1.256l-.303-.184-2.623 1.06.998-2.547-.19-.31A7.957 7.957 0 014 12z"
                    clipRule="evenodd"
                  />
                </svg>
                {location.whatsapp}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* "Get In Touch" Section */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
        <p className="text-white text-lg mb-4">
          If you want to contact us, email us at
          <br />
          <a
            href="mailto:bbpmarketing@briskboldproperties.com"
            className="text-white font-semibold underline"
          >
            bbpmarketing@briskboldproperties.com
          </a>
        </p>
        <a
          href="mailto:hr@briskboldit.com"
          className="text-white font-bold py-3 px-6 rounded-full"
          style={{
            background: 'linear-gradient(to right, #0d4752, #105561)',
          }}
        >
          Send Us an Email
        </a>
      </div>
    </div>
  );
};
