import React from "react";
import CommingSoonimages from '../assets/assets';

const ComingSoon = () => {
  // Set image width to 300
  const imageWidth = 300; 
  const spacing = 16;
  const totalWidth = (imageWidth + spacing) * CommingSoonimages.length; 

  return (
    <div className="relative overflow-hidden w-full mb-12">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-black mb-8 mt-10">
        Coming Soon
      </h2> 

      <div
        className="flex"
        style={{
          animation: "slide 35s linear infinite", 
          whiteSpace: "nowrap", 
          width: `${totalWidth}px`, 
        }}
      >
        {/* Map over the images array and render each image with title */}
        {CommingSoonimages.map((imageObj, index) => (
          <div key={index} className="flex flex-col items-center mx-4">
            <img
              src={imageObj.image} 
              alt={`Property ${index + 1}`}
              className="w-[300px] h-[400px] sm:w-[250px] sm:h-[350px] md:w-[280px] md:h-[370px] object-cover"
            />
            {/* Title below each image */}
            <p className="text-center mt-2 text-black font-semibold text-sm">{imageObj.tittle}</p>
          </div>
        ))}
      </div>

      {/* Inline styles for the animation */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0); /* Start from the first image */
            }
            100% {
              transform: translateX(-${totalWidth}px); /* Move to the left by the full width of all images */
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComingSoon;
