import React, { useEffect, useState } from "react";
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
    //added new
const [usdAmount, setUsdAmount] = useState('');
const [btcAmount, setBtcAmount] = useState(null);


//added new
const BTC_RATE = 0.000025; // Example rate: 1 USD = 0.000025 BTC

const handleConvert = () => {
    const usd = parseFloat(usdAmount);
    if (!isNaN(usd)) {
        setBtcAmount((usd * BTC_RATE).toFixed(6)); // 6 decimal places
    } else {
        setBtcAmount(null);
    }
};
    const navigate = useNavigate();
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFirstLoad(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        
        <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">

            {/* 🔙 Back Button */}
            <div className="absolute z-50 top-6 left-6">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-white bg-white/20 p-3 rounded-full 
                    shadow-md hover:bg-white/30 transition-all duration-300"
                >
                    <ArrowLeft size={24} />
                </button>
            </div>

            {/* 🌌 Animated Top Section */}
            <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6 py-12">

                {/* 🌟 Starry Background Animation */}
                <motion.div
                    className="absolute inset-0 w-full h-full bg-gray-900 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: Math.random(),
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                y: ["0px", "20px", "0px"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: Math.random() * 5 + 3,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </motion.div>

                {/* 🌈 Gradient & Dark-Light Animation */}
                <motion.div
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 via-blue-500 to-cyan-400 
                    blur-[250px] opacity-70 z-0"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.7, 0.4, 0.7] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 w-full h-full bg-black/50 z-0"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.5, 0.7, 0.5] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
      {/* 🔥 Permanent Callout Quote with Glow Effect */}
<div className="relative mt-12 p-8 rounded-lg bg-gray-800 shadow-lg 
    border-l-4 border-blue-500 w-full max-w-full mx-auto 
    scale-105 transition-transform transform">
    
    <blockquote className="text-2xl font-bold italic text-gray-200">
        "Invest in Dubai with the currency of the <span className="text-blue-400">future</span>."
    </blockquote>

    <div className="absolute inset-0 rounded-lg opacity-100 transition-opacity 
        bg-gradient-to-r from-blue-500 to-purple-600 blur-lg z-[-1]"></div>
</div>


                {/* 🌐 Crypto Coins */}
                <div className="relative z-20 flex gap-6 mt-10 flex-wrap justify-center">
                    {cryptoCoins.map((coin, index) => (
                        <div
                            key={index}
                            className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center 
                            overflow-hidden bg-black/30 rounded-full shadow-lg"
                        >
                            <img
                                src={coin.img}
                                alt={coin.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* 💡 Main Heading */}
                <motion.h1
                    className="text-5xl font-bold mt-10 text-transparent bg-clip-text 
                    bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 drop-shadow-2xl z-30"
                    initial={{ opacity: 0, y: firstLoad ? -100 : 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    Own Luxury Property in Dubai with Cryptocurrency
                </motion.h1>

                {/* 💬 Description with Z-Index Fix */}
                <motion.p
                    className="relative z-30 max-w-3xl text-lg mt-6 opacity-90 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    Discover a revolutionary way to invest in <strong className="text-yellow-400">Dubai's luxury real estate</strong> market. 
                    By leveraging cryptocurrency, you can effortlessly purchase high-end properties with <strong>speed, security, and convenience</strong>. 
                    Say goodbye to lengthy banking processes and hidden fees—enjoy instant transactions with enhanced privacy. 
                    Whether you're looking for a lavish villa, a modern apartment, or a commercial space, <strong className="text-cyan-400">crypto payments</strong> make it easier and faster than ever.
                </motion.p>
            </div>
{/* ✅ Features Section */}
<div className="py-20 px-6 bg-gray-900 text-center">
    <h2 className="text-4xl font-bold mb-12 text-white">🚀 Why Choose Crypto for Real Estate?</h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {[
            { icon: "⚡", title: "Fast Transactions", desc: "Complete property purchases in minutes, not weeks." },
            { icon: "🔒", title: "Secure Payments", desc: "Enjoy blockchain security with transparent records." },
            { icon: "🌎", title: "Global Access", desc: "Invest from anywhere without currency exchange issues." },
            { icon: "💰", title: "Lower Fees", desc: "Save on hefty banking and processing fees." },
            { icon: "📈", title: "Potential Growth", desc: "Benefit from crypto's potential price appreciation." },
            { icon: "🕵️‍♂️", title: "Privacy", desc: "Keep your investments confidential with decentralized payments." }
        ].map((feature, index) => (
            <motion.div
                key={index}
                className="p-10 rounded-xl shadow-lg 
                backdrop-blur-lg bg-white/10 border border-cyan-300/60 
                shadow-cyan-300/50 transition-all 
                hover:shadow-cyan-300/90 hover:border-cyan-300"
                whileHover={{ scale: 1.08 }}
            >
                <h3 className="text-2xl font-bold text-white">{feature.icon} {feature.title}</h3>
                <p className="mt-4 text-gray-300">{feature.desc}</p>
            </motion.div>
        ))}
    </div>
</div>
{/* ✅ Crypto Conversion Calculator */}
<div className="py-20 px-6 text-center bg-gray-900">
    <h2 className="text-4xl font-bold mb-12 text-white">🔄 Crypto Conversion Calculator</h2>

    <div className="max-w-lg mx-auto backdrop-blur-lg bg-white/10 
        border border-cyan-300/60 shadow-lg 
        shadow-cyan-300/50 rounded-xl p-10 
        transition-all hover:shadow-cyan-300/90 hover:border-cyan-300">

        <input
            type="number"
            placeholder="Enter amount in USD"
            value={usdAmount}
            onChange={(e) => setUsdAmount(e.target.value)}
            className="w-full p-3 rounded-md bg-transparent text-white mb-4
            border border-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button 
            onClick={handleConvert}
            className="w-full py-3 bg-blue-600 rounded-md 
            hover:bg-blue-700 transition-all text-white font-medium"
        >
            Convert
        </button>

        {btcAmount !== null && (
            <p className="mt-4 text-lg text-gray-300">
                Equivalent in BTC: <span className="text-green-400">{btcAmount} BTC</span>
            </p>
        )}
    </div>
</div>



       {/* 💳 Crypto Payment Process Section */}
<div className="py-20 px-6 text-center bg-gray-900">
    <h2 className="text-4xl font-bold mb-12 text-white">💳 Simple Crypto Payment Process</h2>

    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
        {[
            { icon: "🏠", title: "Choose Property", desc: "Select your desired luxury property." },
            { icon: "💸", title: "Initiate Payment", desc: "Use your crypto wallet securely." },
            { icon: "📜", title: "Confirm Ownership", desc: "Receive documents instantly." }
        ].map((item, index) => (
            <motion.div 
                key={index} 
                className="p-10 rounded-lg shadow-lg bg-white/10 
                border border-cyan-300/60 
                shadow-cyan-300/50 transition-all 
                hover:shadow-cyan-300/90 hover:border-cyan-300 
                backdrop-blur-lg">

                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-gray-300">{item.desc}</p>
            </motion.div>
        ))}
    </div>
</div>
{/* ✅ Closing Section with CTA */}
<div className="py-20 px-6 bg-gray-900 text-center relative z-10">
    <h2 className="text-4xl font-bold text-white mb-8">
        🌟 Ready to Invest in Dubai's Future?
    </h2>

    <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
        Unlock the potential of <span className="text-yellow-400">crypto-powered real estate</span>. 
        Experience <span className="text-cyan-400">faster transactions</span>, 
        lower fees, and borderless property ownership. Whether you're buying your dream villa or 
        making a smart investment, <strong>Dubai welcomes your crypto journey.</strong>
    </p>

{/* 🔥 Permanent Callout Quote with Glow Effect */}
<div className="relative mt-12 p-8 rounded-lg bg-gray-800 shadow-lg 
    border-l-4 border-blue-500 w-full max-w-full mx-auto 
    scale-105 transition-transform transform">
    
    <blockquote className="text-2xl font-bold italic text-gray-200">
        "Crypto is where innovation meets opportunity."
    </blockquote>

    <div className="absolute inset-0 rounded-lg opacity-100 transition-opacity 
        bg-gradient-to-r from-blue-500 to-purple-600 blur-lg z-[-1]"></div>
</div>

</div>







        </div>
    );
};

export default Crypto;
