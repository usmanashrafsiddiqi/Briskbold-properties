import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const cryptoCoins = [
  { name: "Bitcoin", img: "c1.png" },
  { name: "Ethereum", img: "c2.png" },
  { name: "BNB", img: "c3.png" },
  { name: "USDT", img: "c4.png" },
  { name: "Solana", img: "c5.png" },
];

const Crypto = () => {
  const [usdAmount, setUsdAmount] = useState("");
  const [btcAmount, setBtcAmount] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setFirstLoad(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const BTC_RATE = 0.000025;
  const handleConvert = () => {
    const usd = parseFloat(usdAmount);
    setBtcAmount(!isNaN(usd) ? (usd * BTC_RATE).toFixed(6) : null);
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#0f172a] text-white">
        <div className="relative flex flex-col items-center justify-center text-center px-6 py-12">

          {/* Top Gradient Text Callout (pushed down to mt-20) */}
          <div className="relative mt-20 p-8 rounded-lg bg-gradient-to-r from-[#0d4752] to-[#105561] shadow-lg w-full max-w-full mx-auto scale-105">
            <blockquote className="text-2xl font-bold italic text-gray-200">
              Invest in Dubai with the currency of the future.
            </blockquote>
          </div>

          {/* Crypto Icons */}
          <div className="relative z-20 flex gap-6 mt-10 flex-wrap justify-center">
            {cryptoCoins.map((coin, idx) => (
              <div
                key={idx}
                className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden bg-black/30 rounded-full shadow-lg"
              >
                <img src={coin.img} alt={coin.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 drop-shadow-2xl z-30"
            initial={{ opacity: 0, y: firstLoad ? -100 : 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Own Luxury Property in Dubai with Cryptocurrency
          </motion.h1>

          {/* Description */}
          <motion.p
            className="relative z-30 max-w-3xl text-lg mt-6 opacity-90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Discover a revolutionary way to invest in <strong className="text-yellow-400">Dubai's luxury real estate</strong> market. Leverage cryptocurrency for <strong>speed, security, and convenience</strong>. Enjoy instant transactions with enhanced privacy.
          </motion.p>
        </div>

        {/* Why Choose */}
        <div className="py-20 px-6 bg-[#0f172a] text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">🚀 Why Choose Crypto for Real Estate?</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {[
              { icon: "⚡", title: "Fast Transactions", desc: "Complete property purchases in minutes, not weeks." },
              { icon: "🔒", title: "Secure Payments", desc: "Enjoy blockchain security with transparent records." },
              { icon: "🌎", title: "Global Access", desc: "Invest from anywhere without currency exchange issues." },
              { icon: "💰", title: "Lower Fees", desc: "Save on hefty banking and processing fees." },
              { icon: "📈", title: "Potential Growth", desc: "Benefit from crypto's potential price appreciation." },
              { icon: "🕵️‍♂️", title: "Privacy", desc: "Keep your investments confidential with decentralized payments." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="p-10 rounded-xl shadow-lg backdrop-blur-lg bg-white/10 border border-cyan-300/60 hover:shadow-cyan-300/90 hover:border-cyan-300"
                whileHover={{ scale: 1.08 }}
              >
                <h3 className="text-2xl font-bold text-white">{feature.icon} {feature.title}</h3>
                <p className="mt-4 text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conversion Calculator */}
        <div className="py-20 px-6 text-center bg-[#0f172a]">
          <h2 className="text-4xl font-bold mb-12 text-white">🔄 Crypto Conversion Calculator</h2>
          <div className="max-w-lg mx-auto bg-white/10 border border-cyan-300/60 shadow-lg rounded-xl p-10 backdrop-blur-lg hover:shadow-cyan-300/90 hover:border-cyan-300">
            <input
              type="number"
              placeholder="Enter amount in USD"
              value={usdAmount}
              onChange={(e) => setUsdAmount(e.target.value)}
              className="w-full p-3 rounded-md bg-transparent text-white mb-4 border border-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              onClick={handleConvert}
              className="w-full py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition-all text-white font-medium"
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

        {/* Payment Process */}
        <div className="py-20 px-6 text-center bg-[#0f172a]">
          <h2 className="text-4xl font-bold mb-12 text-white">💳 Simple Crypto Payment Process</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {[
              { icon: "🏠", title: "Choose Property", desc: "Select your desired luxury property." },
              { icon: "💸", title: "Initiate Payment", desc: "Use your crypto wallet securely." },
              { icon: "📜", title: "Confirm Ownership", desc: "Receive documents instantly." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-10 rounded-lg bg-white/10 border border-cyan-300/60 shadow-lg backdrop-blur-lg hover:shadow-cyan-300/90 hover:border-cyan-300"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Gradient Callout */}
        <div className="py-20 px-6 bg-[#0f172a] text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">🌟 Ready to Invest in Dubai's Future?</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
            Unlock the potential of <span className="text-yellow-400">crypto-powered real estate</span>. Experience <span className="text-cyan-400">faster transactions</span>, lower fees, and borderless property ownership.
          </p>
          <div className="relative mt-12 p-8 rounded-lg bg-gradient-to-r from-[#0d4752] to-[#105561] shadow-lg w-full max-w-full mx-auto scale-105">
            <blockquote className="text-2xl font-bold italic text-gray-200">
              "Crypto is where innovation meets opportunity."
            </blockquote>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Crypto;
