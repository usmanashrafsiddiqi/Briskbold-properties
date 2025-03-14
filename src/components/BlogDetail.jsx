import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const blogData = {
    1: {
        title: "The Future of Crypto in Real Estate",
        content: "Cryptocurrency is transforming the real estate industry by allowing fast and secure transactions. In Dubai, many investors are now purchasing luxury properties using Bitcoin, Ethereum, and other digital assets...",
        image: "/images/blog1.jpg"
    },
    2: {
        title: "Understanding Blockchain in Property Deals",
        content: "Blockchain technology ensures transparent and tamper-proof transactions in the real estate sector. Smart contracts allow buyers and sellers to execute agreements without intermediaries...",
        image: "/images/blog2.jpg"
    },
    3: {
        title: "Top 5 Investment Tips for 2025",
        content: "With the rise of digital assets and property technology, investors must adopt smart strategies to maximize their returns. Here are the top 5 tips for investing in 2025...",
        image: "/images/blog3.jpg"
    }
};

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData[id];

    if (!blog) {
        return <h2 className="text-white text-center mt-10">Blog Not Found</h2>;
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

            {/* Blog Image */}
            <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full max-w-4xl h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Blog Title */}
            <h1 className="text-3xl font-bold mt-6 text-center">{blog.title}</h1>

            {/* Blog Content */}
            <p className="max-w-3xl text-lg mt-6 opacity-90 text-center">{blog.content}</p>
        </div>
    );
};

export default BlogDetail;
