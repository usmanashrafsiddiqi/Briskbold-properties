import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 under font-light">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Real stories from Those Who Found Home with Us</p>

      {/* Testimonial Container */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="flex-1 max-w-[340px] border shadow-lg rounded px-8 py-12 text-center w-full sm:w-1/2 lg:w-1/3"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

            {/* Star rating */}
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (items, index) => {
                return <img key={index} src={assets.star_icon} alt="" />;
              })}
            </div>

            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
