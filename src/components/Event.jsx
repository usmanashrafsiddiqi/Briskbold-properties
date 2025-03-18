import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const events = [
    { id: 1, title: "Binghatti Developers Hosts Dubai'sLargest Private Property Show of 2024 ", image: "/mainpic.jpg" },
    { id: 2, title: "International Property Show 2024", image: "/event 5.jpg" },
    { id: 3, title: "Crypto & Real Estate Panel", image: "/event 3.jpg" },
    { id: 4, title: "Investment Strategies 2025", image: "/event4.jpg" },
   
];

const blogs = [
    { id: 1, title: "The Future of Crypto in Real Estate", image: "/images/blog1.jpg", description: "How cryptocurrency is reshaping property transactions in Dubai." },
    { id: 2, title: "Understanding Blockchain in Property Deals", image: "/images/blog2.jpg", description: "A beginner-friendly guide to blockchain's role in real estate." },
    { id: 3, title: "Top 5 Investment Tips for 2025", image: "/images/blog3.jpg", description: "Smart strategies for investing in luxury properties and digital assets." },
];

const Event = () => {
    return (
        <div 
            className="min-h-screen flex flex-col items-center text-white px-6 py-12 relative 
            bg-gradient-to-br from-green-900 via-blue-800 to-indigo-700 animate-gradient"
        >
            {/* Back Arrow Button */}
            <Link 
                to="/" 
                className="absolute top-6 left-6 flex items-center gap-2 text-white 
                bg-white/20 p-3 rounded-full shadow-md hover:bg-white/30 transition-all duration-300"
            >
                <ArrowLeft size={24} />
            </Link>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold mt-8 text-center drop-shadow-lg">
                Explore Our Latest Events & Insights
            </h1>

            {/* Subheading - Events */}
            <h2 className="text-2xl font-semibold mt-6">Events</h2>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
                {events.map((event) => (
                    <Link 
                        key={event.id} 
                        to={`/event/${event.id}`} 
                        className="group relative bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    >
                        <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl font-semibold mt-3 text-center">{event.title}</h3>
                    </Link>
                ))}
            </div>

            {/* Subheading - Blogs */}
            <h2 className="text-2xl font-semibold mt-12">Blogs</h2>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
                {blogs.map((blog) => (
                    <Link 
                        key={blog.id} 
                        to={`/blog/${blog.id}`} 
                        className="group relative bg-white/10 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:shadow-xl 
                        transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    >
                        <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl font-semibold mt-3">{blog.title}</h3>
                        <p className="text-sm mt-2 opacity-80">{blog.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Event;
