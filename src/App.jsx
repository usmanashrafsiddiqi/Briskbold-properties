import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
import WhatsAppChat from "./components/WhatsAppChat";

import Properties from "./components/Properties";
import Crypto from "./components/Crypto";
import Event from "./components/Event";
import EventDetail from "./components/EventDetail";
import BlogDetail from "./components/BlogDetail";
import PrivacyPolicy from "./components/PrivacyPolicy";

// ✅ Add this to scroll to sections based on state.hash
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.state?.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Wait to ensure DOM is mounted
      }
    }
  }, [location]);

  return null;
};

function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Projects />
      <ComingSoon />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TTTFQR6S" });
  }, []);

  return (
    <Router>
      <Navbar />
      <ScrollHandler /> {/* ✅ Mount scroll logic globally */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
