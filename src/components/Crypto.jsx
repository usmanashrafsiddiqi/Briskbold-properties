import React from "react";
import { Link } from "react-router-dom"; 
import { ArrowLeft } from "lucide-react"; // Back arrow icon

const cryptoCoins = [
    { name: "Bitcoin", img: "bit5.jpg" },
    { name: "Ethereum", img: "bit 1.jpg" },
    { name: "BNB", img: "bit2.jpg" },
    { name: "USDT", img: "bit4.jpg" },
    { name: "Solana", img: "bit5.jpg" },

];

const Crypto = () => {
    return (
        <div 
            className="min-h-screen flex flex-col items-center text-white px-6 py-12 relative 
            bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 animate-gradient"
        >
            {/* Back Arrow Button */}
            <Link 
                to="/" 
                className="absolute top-6 left-6 flex items-center gap-2 text-white 
                bg-white/20 p-3 rounded-full shadow-md hover:bg-white/30 transition-all duration-300"
            >
                <ArrowLeft size={24} />
            </Link>

            {/* Crypto Coins Section */}
            <div className="flex gap-6 mt-10">
                {cryptoCoins.map((coin, index) => (
                 <div 
                 key={index} 
                 className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300"
             >
                 <img 
                     src={coin.img} 
                     alt={coin.name} 
                     className="w-full h-full object-cover scale-125"
                 />
             </div>
             
              
                ))}
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold mt-8 text-center drop-shadow-lg">
                Own Luxury Property in Dubai with Cryptocurrency
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-center text-lg mt-6 opacity-90">
                Step into the future of real estate by purchasing premium properties in Dubai using cryptocurrency. 
                Enjoy <strong>secure, fast, and hassle-free</strong> transactions with no banking delays. Whether you’re an investor 
                or looking for your dream home, crypto payments make real estate investment seamless and efficient.
            </p>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
                {[
                    { title: "Seamless Transactions", desc: "Skip traditional banking delays and transfer funds instantly." },
                    { title: "Enhanced Security", desc: "Blockchain technology ensures tamper-proof transactions." },
                    { title: "No Hidden Fees", desc: "Avoid high banking and processing fees for a cost-effective purchase." },
                    { title: "Global Accessibility", desc: "Invest in Dubai’s prime real estate from anywhere in the world." },
                    { title: "Exclusive Opportunities", desc: "Gain access to premium properties available only for crypto buyers." },
                    { title: "Smart Contracts", desc: "Automated digital agreements for a transparent and smooth process." }
                ].map((benefit, index) => (
                    <div 
                        key={index} 
                        className="bg-white/10 backdrop-blur-lg text-white p-6 rounded-lg shadow-lg text-center 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/20"
                    >
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                        <p className="mt-2 text-sm opacity-90">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Crypto;
