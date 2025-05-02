import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div
      className="w-full py-12 px-6 lg:px-24 bg-[#e6f3f2] flex flex-col lg:flex-row items-center gap-12"
      id="Testimonials"
    >
      {/* Left Section - Centered Design */}
      <div className="lg:w-1/2 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0d4752] to-[#105561] mb-6 leading-tight">
          What Our Customers Say
        </h1>
        <p className="text-lg text-[#0d4752] max-w-xl mx-auto font-medium leading-relaxed">
          Hear directly from the families and individuals who found their perfect space with us. Your satisfaction is our greatest achievement—thank you for being a part of our journey.
        </p>
      </div>

      {/* Right Section - Testimonials */}
      <div className="lg:w-1/2 flex flex-col gap-6 items-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-full max-w-xl bg-[#0d4752cc] text-white rounded-[3rem] px-10 py-4 shadow-2xl border border-[#0d4752] transition-transform hover:scale-[1.02]"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <img
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                src={testimonial.image}
                alt={testimonial.alt}
              />
              <h2 className="text-xl font-semibold">{testimonial.name}</h2>
              <div className="flex justify-center gap-1 text-yellow-400">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-sm font-medium leading-relaxed">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
