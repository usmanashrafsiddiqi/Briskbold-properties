import React, { useState, useEffect } from 'react';
import { assets, projectsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaBuilding, FaRegBuilding } from 'react-icons/fa';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(3); // Large screens - 3 images
            } else if (window.innerWidth >= 768) {
                setCardsToShow(2); // Medium screens - 2 images
            } else {
                setCardsToShow(1); // Small screens - 1 image
            }
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const nextProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div
            className="py-6 px-4 md:px-20 lg:px-32 w-full overflow-hidden"
            id="Projects"
            style={{
                background: 'linear-gradient(to right, #f0f7f4, #c6e2e0)',
            }}
        >
            <h1 className="text-3xl sm:text-4xl font-bold text-center underline mt-6 bg-gradient-to-r from-[#0d4752] to-[#105561] bg-clip-text text-transparent">
                Projects
            </h1>

            <p className="text-center text-gray-600 mb-6 max-w-md mx-auto text-sm sm:text-base">
                Crafting spaces, Building legacies — Explore our portfolio of signature developments.
            </p>

            {/* Slider buttons */}
            <div className="flex justify-end items-center mb-4 space-x-4">
                <button
                    onClick={prevProject}
                    className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
                    aria-label="Previous"
                >
                    <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
                </button>
                <button
                    onClick={nextProject}
                    className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition"
                    aria-label="Next"
                >
                    <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
                </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                    }}
                >
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0"
                            style={{
                                width: `${100 / cardsToShow}%`,
                                marginRight: '16px', // Gap between images
                            }}
                        >
                            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-105">
                                {/* Project Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] object-cover rounded-t-xl transform group-hover:scale-105 transition-all duration-300"
                                    style={{
                                        width: '100%',  // Default width for larger screens
                                    }}
                                />

                                {/* Project Details */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center gap-2 text-gray-800">
                                        <FaBuilding className="text-[#0d4752]" />
                                        <h2 className="font-semibold text-xl">{project.title}</h2>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <FaRegBuilding className="text-[#0d4752]" />
                                        <span className="text-lg font-semibold">{project.Units}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <FaMapMarkerAlt className="text-[#0d4752]" />
                                        <span className="text-lg">{project.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Explore More */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={() => navigate('/properties')}
                    className="bg-[#0d4752] hover:bg-[#093a43] text-white px-6 py-3 rounded-lg shadow-md transition duration-300 text-sm sm:text-base"
                >
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default Projects;
