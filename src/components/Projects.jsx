import React, { useState, useEffect } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(3);
            } else if (window.innerWidth >= 768) {
                setCardsToShow(2);
            } else {
                setCardsToShow(1);
            }
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === projectsData.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return projectsData.length - 1;
            }
            return prevIndex - 1;
        });
    };

    return (
        <div className="py-4 pt-2 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-200 mx-0 mt-0 pb-10" id="Projects">
            <h1 className="text-2xl sm:text-4xl font-bold mb-0 text-center underline mt-6">
                Projects
            </h1>
            <p className="text-center text-gray-500 mb-2 max-w-80 mx-auto">
                Crafting spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* -------------------------------slider buttons----------------------------- */}
            <div className="flex justify-end items-center mb-2 space-x-4">
                <button
                    onClick={prevProject}
                    className="p-3 bg-gray-200 rounded-full transform hover:scale-110 transition-all duration-300 shadow-md hover:bg-gray-300"
                    aria-label="Previous-Project"
                >
                    <img src={assets.left_arrow} alt="Previous" className="w-8 h-8 transform hover:rotate-180 transition-all duration-300" />
                </button>
                <button
                    onClick={nextProject}
                    className="p-3 bg-gray-200 rounded-full transform hover:scale-110 transition-all duration-300 shadow-md hover:bg-gray-300"
                    aria-label="Next-Project"
                >
                    <img src={assets.right_arrow} alt="Next" className="w-8 h-8 transform hover:rotate-180 transition-all duration-300" />
                </button>
            </div>

            {/* ----------------------project slider container------------------------------ */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                    }}
                >
                    {projectsData.map((project, index) => (
                        <div className="relative flex-shrink-0 w-full sm:w-1/3" key={index}>
                            {/* Image Container with Hover Effect */}
                            <div className="group relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[400px] object-cover mb-4 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-75"
                                />
                                {/* Title, price, and location box, no hover effect */}
                                <div className="bg-white px-4 py-2 shadow-md w-full">
                                    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                    <p className="text-black-500 text-sm font-bold">{project.Units}</p>
                                    <p className="text-black-400 text-sm">{project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
