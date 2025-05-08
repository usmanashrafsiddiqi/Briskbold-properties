import React from 'react';

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="About" className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/aboutt.jpg"
          alt="About"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
            Passionate About Properties, Dedicated to Your Vision
          </p>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Our Story</h2>
            <p className="text-base md:text-lg leading-relaxed">
              BriskBOLD Properties is a leading real estate brokerage firm in the UAE, known for its expertise,
              professionalism, and commitment to delivering exceptional client experiences.
            </p>
          </div>
        </div>
      </div>

      {/* About Section Content */}
      <div className="py-20 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-lg">
            From specializing in off-plan properties to offering end-to-end real estate services across residential,
            commercial, luxury, and holiday homes, BriskBOLD Properties has evolved to meet the dynamic needs of the market.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-12">
          <div>
            <p className="text-4xl font-bold text-[#0d4752]">5+</p>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#0d4752]">12+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#0d4752]">20+</p>
            <p className="text-gray-600">Mn. Sq. Ft. Delivered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#0d4752]">25+</p>
            <p className="text-gray-600">Ongoing Projects</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <button
            className="bg-gradient-to-r from-[#0d4752] to-[#105561] text-white px-8 py-3 rounded-lg text-lg shadow-md"
            onClick={scrollToContact}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
