import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center w-full p-14 md:px-20 lg:px-32 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/blurbg.jpg')", 
            }}
            id="About"
        >
            {/* Heading and Subheading - outside the white box */}
            <div className="relative z-10 text-center mb-10">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-white">
                    About <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span>
                </h1>
                <p className="text-white max-w-80 mx-auto text-center mb-8">
                    Passionate About Properties, Dedicated to Your Vision
                </p>
            </div>

            {/* White Box with Frosted Glass Effect and Shiny Border */}
            <div className="relative z-10 bg-white bg-opacity-60 p-8 w-full sm:w-3/4 lg:w-2/3 mx-auto rounded-lg shadow-lg backdrop-blur-lg border border-transparent 
                border-[3px] 
                border-image:linear-gradient(45deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3)) 1 stretch
                ">
                {/* Paragraph at the top */}
                <p className="text-black mb-8 text-center sm:text-left">
                    <strong>BriskBOLD Properties</strong> is a leading real estate brokerage firm in the UAE, known for its expertise, professionalism, and commitment to delivering exceptional client experiences. Our team of multilingual and highly skilled agents ensures tailored solutions for every property need.
                </p>

                <p className="text-black mb-8 text-center sm:text-left">
                    <strong>Who We Are</strong><br />
                    From specializing in off-plan properties to offering end-to-end real estate services across residential, commercial, luxury, and holiday homes, BriskBOLD Properties has evolved to meet the dynamic needs of the market. Built on a foundation of trust and transparency, we are dedicated to exceeding expectations and fostering long-lasting relationships with our clients.
                </p>

                {/* Stats below the paragraph */}
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

                {/* Button below stats aligned to the left for larger screens, centered for small screens */}
                <div className="flex justify-center sm:justify-start">
                    <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-2 rounded mt-4">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
