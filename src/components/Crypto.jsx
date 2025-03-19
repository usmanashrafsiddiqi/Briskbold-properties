import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const cryptoCoins = [
    { name: "Bitcoin", img: "c1.png" },
    { name: "Ethereum", img: "c2.png" },
    { name: "BNB", img: "c3.png" },
    { name: "USDT", img: "c4.png" },
    { name: "Solana", img: "c5.png" },
];

const Crypto = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);  // Fast navigation
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-900 text-white">

            {/* 🌌 Animated Gradient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    className="absolute w-[200%] h-[200%] bg-gradient-to-r from-fuchsia-600 via-blue-500 to-cyan-400 
                    blur-[250px] opacity-70 animate-pulse"
                    initial={{ x: "-50%", y: "-50%" }}
                    animate={{ x: "50%", y: "50%" }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[190%] h-[190%] bg-gradient-to-r from-teal-400 via-violet-500 to-purple-600 
                    blur-[220px] opacity-60 animate-pulse"
                    initial={{ x: "50%", y: "50%" }}
                    animate={{ x: "-40%", y: "-30%" }}
                    transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
                />
            </div>

            {/* ⭐ Star Animation */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {Array.from({ length: 30 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                            opacity: Math.random() * 0.8 + 0.2,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0], 
                            scale: [1, 1.5, 1] 
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: Math.random() * 5 + 3,
                            ease: "easeInOut",
                            delay: Math.random() * 3
                        }}
                    />
                ))}
            </div>

            {/* 🌫️ Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* 🔙 Back Button */}
            <div className="relative z-50 pointer-events-auto">
                <button
                    onClick={handleBack}
                    className="absolute top-6 left-6 flex items-center gap-2 text-white 
                    bg-white/20 p-3 rounded-full shadow-md hover:bg-white/30 transition-all duration-300"
                >
                    <ArrowLeft size={24} />
                </button>
            </div>

            {/* 💎 Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6 py-12">

                {/* 🌐 Crypto Coins */}
                <div className="flex gap-6 mt-10 flex-wrap justify-center">
                    {cryptoCoins.map((coin, index) => (
                        <motion.div
                            key={index}
                            className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden 
                            hover:scale-110 transition-transform duration-300"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                            <img
                                src={coin.img}
                                alt={coin.name}
                                className="w-full h-full object-cover rounded-full shadow-lg"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* 💡 Heading */}
                <h1 className="text-5xl font-bold mt-10 drop-shadow-2xl glow text-transparent bg-clip-text 
                    bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500">
                    Own Luxury Property in Dubai with Cryptocurrency
                </h1>

                {/* 💬 Description */}
                <p className="max-w-2xl text-lg mt-6 opacity-90">
                    Step into the future of real estate by purchasing premium properties in Dubai using cryptocurrency. 
                    Enjoy <strong className="text-yellow-400">secure, fast, and hassle-free</strong> transactions with no banking delays. 
                    Whether you’re an investor or looking for your dream home, crypto payments make real estate investment seamless and efficient.
                </p>

                {/* 🚀 Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
                    {[
                        { title: "Seamless Transactions", desc: "Skip traditional banking delays and transfer funds instantly." },
                        { title: "Enhanced Security", desc: "Blockchain technology ensures tamper-proof transactions." },
                        { title: "No Hidden Fees", desc: "Avoid high banking and processing fees for a cost-effective purchase." },
                        { title: "Global Accessibility", desc: "Invest in Dubai’s prime real estate from anywhere in the world." },
                        { title: "Exclusive Opportunities", desc: "Gain access to premium properties available only for crypto buyers." },
                        { title: "Smart Contracts", desc: "Automated digital agreements for a transparent and smooth process." }
                    ].map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg text-center 
                            transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/20"
                            whileHover={{ scale: 1.1, rotate: 1 }}
                        >
                            <h3 className="text-xl font-semibold">{benefit.title}</h3>
                            <p className="mt-2 text-sm opacity-90">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Crypto;
