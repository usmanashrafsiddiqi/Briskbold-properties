import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className="w-full py-10 lg:px-32 overflow-hidden bg-white px-0 pb-16" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 under font-light">Testimonials</span>
      </h1>
      <p className="text-center text-black-500 mb-12 max-w-80 mx-auto">Real stories from Those Who Found Home with Us</p>

      {/* Testimonial Container */}
      <div className="flex flex-col items-center sm:flex-row flex-wrap justify-center gap-8 lg:gap-12">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="flex-1 max-w-[340px] w-full sm:w-1/2 lg:w-1/3"
          >
            <div className="relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-[2px] rounded-lg">
              {/* Frosted Glass Effect with Shiny Border */}
              <div className="relative bg-white bg-opacity-60 p-8 rounded-lg shadow-lg backdrop-blur-lg border-2 border-transparent 
                 
                border-image:linear-gradient(45deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3)) 1 stretch h-[450px] flex flex-col justify-between transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-white/60">
                <img
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                  src={testimonial.image}
                  alt={testimonial.alt}
                />

                {/* Name and Star rating */}
                <div className="flex flex-col justify-center items-center text-center">
                  <h2 className="text-xl text-black font-medium">{testimonial.name}</h2>

                  {/* Star rating aligned to the center */}
                  <div className="flex justify-center gap-1 text-yellow-500 mb-4">
                    {Array.from({ length: testimonial.rating }, (items, index) => {
                      return <img key={index} src={assets.star_icon} alt="" />;
                    })}
                  </div>
                </div>

                <p className="text-black flex-1">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
