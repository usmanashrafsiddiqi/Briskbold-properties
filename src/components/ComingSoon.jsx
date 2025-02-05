import React from "react";
import CommingSoonimages from '../assets/assets'; 

const ComingSoon = () => {
  
  const imageWidth = 250;
  const spacing = 16;
  const totalWidth = (imageWidth + spacing) * CommingSoonimages.length; 

  return (
    <div className="relative overflow-hidden w-full h-[350px] mb-12">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-black mb-8 mt-10">
        Coming Soon
      </h2> 

      <div
        className="absolute flex"
        style={{
          animation: "slide 30s linear infinite", 
          whiteSpace: "nowrap", 
          display: "flex",
          width: `${totalWidth}px`, 
        }}
      >
        {/* Map over the images array and render each image */}
        {CommingSoonimages.map((imageObj, index) => (
          <img
            key={index}
            src={imageObj.image} 
            alt={`Property ${index + 1}`}
            className="w-[250px] h-[350px] sm:w-[200px] sm:h-[250px] md:w-[220px] md:h-[300px] object-cover mx-4"
          />
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
