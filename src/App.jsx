
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import { Contact } from "./components/Contact"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import ComingSoon from "./components/ComingSoon"
import TagManager from "react-gtm-module"
import WhatsAppChat from "./components/WhatsAppChat"

function App() {

  const gtmInd = {
    gtmId: "GTM-TTTFQR6S",
  };

  TagManager.initialize(gtmInd);

  return (


    <div className="w-full overflow-hidden">

      <Header />
      <Projects />
      <ComingSoon />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat/>

    </div>



  )
}

export default App
