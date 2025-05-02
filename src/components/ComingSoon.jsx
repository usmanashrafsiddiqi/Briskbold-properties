import React from "react"; 
import CommingSoonimages from '../assets/assets';

const ComingSoon = () => {
  const imageWidth = 300; 
  const spacing = 16;
  const totalWidth = (imageWidth + spacing) * CommingSoonimages.length; 

  return (
    <div className="w-full py-8" style={{ backgroundColor: '#c6e2e0' }}>
      <div className="relative overflow-hidden w-full mb-12">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-8 mt-10 bg-gradient-to-r from-[#0d4752] to-[#105561] bg-clip-text text-transparent">
          Coming Soon
        </h2>

        <div
          className="flex"
          style={{
            animation: "slide 60s linear infinite", // Slowed down animation speed to 60s
            whiteSpace: "nowrap",
            width: `${totalWidth * 2}px`, // This ensures smooth scrolling with duplicate images
          }}
        >
          {CommingSoonimages.map((imageObj, index) => (
            <div key={index} className="flex flex-col items-center mx-4 relative">
              {/* Image */}
              <img
                src={imageObj.image} 
                alt={`Property ${index + 1}`}
                className="w-[300px] h-[400px] sm:w-[250px] sm:h-[350px] md:w-[280px] md:h-[370px] object-cover"
              />
              
              {/* Black Box Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 px-4 rounded-b-xl">
                <h3 className="text-center font-semibold text-xl">{imageObj.tittle}</h3>
              </div>
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-${totalWidth}px);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ComingSoon;
