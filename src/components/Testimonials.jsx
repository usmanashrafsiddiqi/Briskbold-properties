import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div id="Testimonials"  className="py-20 px-6 lg:px-20" style={{ backgroundColor: '#c6e2e0' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
            What Our <br /> Customers Says
          </h2>
          <p className="text-gray-700 max-w-md">
            Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common.
          </p>
        </div>

        {/* Right Testimonials Section */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-xl px-6 py-5 shadow-md flex items-start gap-4 ${
                idx === 1 ? 'border-l-4 border-[#7a5af8] -ml-4' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
              {idx === 1 && (
                <span className="absolute top-2 right-4 text-[#7a5af8] text-xl font-bold">””</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
