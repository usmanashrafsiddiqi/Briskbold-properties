import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const eventData = {
    1: {
        title: "Dubai Blockchain Summit",
        images: ["/images/event1-1.jpg", "/images/event1-2.jpg", "/images/event1-3.jpg"],
    },
    2: {
        title: "Luxury Property Expo",
        images: ["/images/event2-1.jpg", "/images/event2-2.jpg", "/images/event2-3.jpg"],
    },
    3: {
        title: "Crypto & Real Estate Panel",
        images: ["/images/event3-1.jpg", "/images/event3-2.jpg", "/images/event3-3.jpg"],
    },
    4: {
        title: "Investment Strategies 2025",
        images: ["/images/event4-1.jpg", "/images/event4-2.jpg", "/images/event4-3.jpg"],
    },
    5: {
        title: "Digital Asset Conference",
        images: ["/images/event5-1.jpg", "/images/event5-2.jpg", "/images/event5-3.jpg"],
    },
};

const EventDetail = () => {
    const { id } = useParams();
    const event = eventData[id];

    if (!event) {
        return <h2 className="text-white text-center mt-10">Event Not Found</h2>;
    }

    return (
        <div 
            className="min-h-screen flex flex-col items-center text-white px-6 py-12 relative 
            bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 animate-gradient"
        >
            {/* Back Arrow Button */}
            <Link 
                to="/events" 
                className="absolute top-6 left-6 flex items-center gap-2 text-white 
                bg-white/20 p-3 rounded-full shadow-md hover:bg-white/30 transition-all duration-300"
            >
                <ArrowLeft size={24} />
            </Link>

            {/* Event Title */}
            <h1 className="text-3xl font-bold mt-8 text-center">{event.title}</h1>

            {/* Event Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
                {event.images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Event ${event.title} - ${index + 1}`} 
                        className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all"
                    />
                ))}
            </div>
        </div>
    );
};

export default EventDetail;
