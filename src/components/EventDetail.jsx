import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const eventData = {
  1: {
    title: "Tokyo Hosts BriskBold’s Dubai Property Showcase",
    date: "March 15, 2025",
    location: "Tokyo, Japan",
    description:
      " BriskBold Properties proudly hosted an exclusive Dubai Real Estate Showcase in the heart of Tokyo.The event brought together property investors, real estate enthusiasts, and industry professionals to explore top-tier real estate opportunities in Dubai. Our team presented premium residential and commercial properties, shared market insights, and built valuable international connections.The event received a phenomenal response, further strengthening our presence in the global market. We are thrilled with the turnout and look forward to many more such successful international engagements.",
    images: ["/japan1.jpg", "/japan3.jpg", "/japan2.jpg"],
  },
  2: {
    title: "International Property Show 2024",
    date: "February 10–12, 2024",
    location: "Dubai World Trade Centre, UAE",
    description:
      "The International Property Show brought together global real estate developers, investors, and industry professionals. BriskBold showcased its elite property portfolio with interactive exhibits and expert consultations.",
    images: ["/event 6.jpg", "/event 7.jpg", "/event 5.jpg"],
  },
  3: {
    title: "Crypto & Real Estate Panel",
    date: "April 8, 2024",
    location: "Singapore",
    description:
      "BriskBold led a dynamic panel exploring the intersection of cryptocurrency and real estate. Discussions included blockchain-backed property transactions, digital assets, and innovative investment strategies.",
    images: ["/images/event3-1.jpg", "/images/event3-2.jpg", "/images/event3-3.jpg"],
  },
  4: {
    title: "Investment Strategies 2025",
    date: "January 22, 2025",
    location: "New York, USA",
    description:
      "A strategic event for forward-thinking investors, BriskBold shared its vision for real estate growth in 2025, covering international property trends, market insights, and portfolio diversification techniques.",
    images: ["/images/event4-1.jpg", "/images/event4-2.jpg", "/images/event4-3.jpg"],
  },
  5: {
    title: "Digital Asset Conference",
    date: "May 3, 2025",
    location: "London, UK",
    description:
      "This event centered on integrating real estate with digital asset ecosystems. BriskBold presented solutions for tokenized property investment and hosted immersive networking sessions.",
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
      <h1 className="text-3xl md:text-4xl font-bold mt-8 text-center">{event.title}</h1>

      {/* Event Date and Location */}
      <p className="text-lg md:text-xl text-white/80 mt-2">
        {event.date} &nbsp;|&nbsp; <span className="italic">{event.location}</span>
      </p>

      {/* Event Description */}
      <p className="text-xl font-semibold text-white max-w-4xl mt-6 text-center leading-relaxed">
        {event.description}
      </p>

      {/* Event Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {event.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event ${event.title} - ${index + 1}`}
            className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default EventDetail;
