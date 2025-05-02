import React from 'react';

const About = () => {
  // Function to scroll to the Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full h-[80vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/about.jpg')", // Image in the public folder
        backgroundPosition: 'center', // Center the image
        backgroundSize: 'cover', // Ensure the image fully covers the background without cropping
        backgroundRepeat: 'no-repeat', // Prevent image repetition
        color: 'white',
      }}
      id="About"
    >
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4 md:px-20 lg:px-32 w-full">
        {/* Heading and Subheading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-[#0d4752] to-[#105561] bg-clip-text mb-6">
          About <span className="underline underline-offset-4 decoration-1">Our Brand</span>
        </h1>
        <p className="text-xl sm:text-2xl font-light mb-12">
          Passionate About Properties, Dedicated to Your Vision
        </p>

        {/* About and Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          {/* Left Section: About Us */}
          <div className="max-w-lg text-center sm:text-left">
            <p className="text-lg font-medium mb-6">
              <strong className="text-xl">BriskBOLD Properties</strong> is a leading real estate brokerage firm in the UAE, known for its expertise, professionalism, and commitment to delivering exceptional client experiences. Our team of multilingual and highly skilled agents ensures tailored solutions for every property need.
            </p>
            <p className="text-lg font-medium mb-6">
              <strong className="text-xl">Who We Are</strong><br />
              From specializing in off-plan properties to offering end-to-end real estate services across residential, commercial, luxury, and holiday homes, BriskBOLD Properties has evolved to meet the dynamic needs of the market. Built on a foundation of trust and transparency, we are dedicated to exceeding expectations and fostering long-lasting relationships with our clients.
            </p>
          </div>

          {/* Right Section: Stats and Achievements */}
          <div className="grid grid-cols-2 gap-6 md:gap-12">
            <div className="relative p-8 bg-gradient-to-r from-[#0d4752] to-[#105561] rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div className="relative p-8 bg-gradient-to-r from-[#0d4752] to-[#105561] rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="relative p-8 bg-gradient-to-r from-[#0d4752] to-[#105561] rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-lg">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="relative p-8 bg-gradient-to-r from-[#0d4752] to-[#105561] rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-lg">Ongoing Projects</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <button
            className="bg-gradient-to-r from-[#0d4752] to-[#105561] text-white px-8 py-3 rounded-2xl hover:scale-110 transform transition-all duration-300"
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
