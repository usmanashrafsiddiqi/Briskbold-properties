import React, { useState } from 'react';
import { projectsData } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const locations = ['All', ...new Set(projectsData.map((p) => p.location.trim()))];

  const filteredProjects = projectsData.filter((project) => {
    const locationMatch =
      selectedLocation === 'All' || project.location.trim() === selectedLocation;
    const titleMatch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return locationMatch && titleMatch;
  });

  return (
    <div className="px-4 py-6 md:px-16 lg:px-24 bg-[#e6f3f2] min-h-screen">
      
      {/* Fixed Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 p-4 bg-[#0d4752] text-white rounded-full shadow-md transform hover:scale-110 transition-all duration-300"
        aria-label="Back to Home"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10H3a1 1 0 110-2h11.586L10.293 3.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <h1 className="text-3xl font-bold text-center text-[#0d4752] mb-6 underline">
        All Properties
      </h1>

      {/* Filter Bar */}
      <div className="sticky top-0 z-10 bg-[#e6f3f2] py-4 mb-6 shadow-sm">
        <div className="flex flex-wrap justify-center gap-3 mb-3">
          {locations.map((loc, i) => (
            <button
              key={i}
              onClick={() => setSelectedLocation(loc)}
              className={`px-4 py-2 rounded-full text-base font-bold border transition duration-200 ${
                selectedLocation === loc
                  ? 'bg-[#0d4752] text-white border-[#0d4752]'
                  : 'bg-white text-[#0d4752] border-gray-300 hover:border-[#0d4752]'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-xs shadow-sm"
          />
        </div>
      </div>

      {/* Property Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No properties found.</p>
        ) : (
          filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Updated Image height */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover" // Increased image height here
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.Units}</p>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Properties;
