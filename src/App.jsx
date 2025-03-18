import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
import TagManager from "react-gtm-module";
import WhatsAppChat from "./components/WhatsAppChat";
import Crypto from "./components/Crypto"; 
import Event from "./components/Event"; 
import EventDetail from "./components/EventDetail"; 
import BlogDetail from './components/BlogDetail';




function App() {
  
  const gtmInd = {
    gtmId: "GTM-TTTFQR6S",
  };

  TagManager.initialize(gtmInd);



  return (
    <Router>
      <Routes>
        {/* Main App Content */}
        <Route
          path="/"
          element={
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
          }
        />
        
        {/* Crypto Page Route */}
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/events" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
