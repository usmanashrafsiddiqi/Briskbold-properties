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
            className="relative flex flex-col items-center justify-center w-full p-14 md:px-20 lg:px-32 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/blurbg.jpg')",
            }}
            id="About"
        >
            {/* Heading and Subheading */}
            <div className="relative z-10 text-center mb-10">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-[#0d4752] to-[#105561] bg-clip-text text-transparent">
  About <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span>
</h1>

                <p className="text-white max-w-80 mx-auto text-center mb-8">
                    Passionate About Properties, Dedicated to Your Vision
                </p>
            </div>

            {/* White Box with Frosted Glass Effect */}
            <div className="relative z-10 bg-white bg-opacity-60 p-8 w-full sm:w-3/4 lg:w-2/3 mx-auto rounded-lg shadow-lg backdrop-blur-lg border border-white/50">
                {/* Paragraph */}
                <p className="text-black mb-8 text-center sm:text-left">
                    <strong>BriskBOLD Properties</strong> is a leading real estate brokerage firm in the UAE, known for its expertise, professionalism, and commitment to delivering exceptional client experiences. Our team of multilingual and highly skilled agents ensures tailored solutions for every property need.
                </p>

                <p className="text-black mb-8 text-center sm:text-left">
                    <strong>Who We Are</strong><br />
                    From specializing in off-plan properties to offering end-to-end real estate services across residential, commercial, luxury, and holiday homes, BriskBOLD Properties has evolved to meet the dynamic needs of the market. Built on a foundation of trust and transparency, we are dedicated to exceeding expectations and fostering long-lasting relationships with our clients.
                </p>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-6 md:gap-10 mb-8 text-center sm:text-left">
                    <div>
                        <p className="text-4xl font-medium text-black">5+</p>
                        <p className="text-black">Years of Excellence</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-black">12+</p>
                        <p className="text-black">Projects completed</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-black">20+</p>
                        <p className="text-black">Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-black">25+</p>
                        <p className="text-black">Ongoing Projects</p>
                    </div>
                </div>

                {/* Learn More Button */}
                <div className="flex justify-center sm:justify-start">
                <button 
  className="bg-gradient-to-r from-[#0d4752] to-[#105561] text-white px-8 py-2 rounded mt-4"
  onClick={scrollToContact}
>
  Learn more
</button>

                </div>
            </div>
        </div>
    );
};

export default About;
