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
        <div className="container mx-auto py-4 pt-2 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
            <h1 className="text-2xl sm:text-4xl font-bold mb-0 text-center">
                Projects <span className="underline underline-offset-4 decoration-1 under">Completed</span>
            </h1>
            <p className="text-center text-gray-500 mb-2 max-w-80 mx-auto">
                Crafting spaces, Building Legacies-Explore Our Portfolio
            </p>

            {/* -------------------------------slider buttons----------------------------- */}
            <div className="flex justify-end items-center mb-2">
                <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous-Project">
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Next-Project">
                    <img src={assets.right_arrow} alt="Next" />
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
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] object-cover mb-4" 
                            />
                            {/* Title, price, and location box moved below the image */}
                            <div className="bg-white px-4 py-2 shadow-md w-full">
                                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                <p className="text-black-500 text-sm font-bold">{project.price}</p>
                                <p className="text-black-400 text-sm">{project.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
