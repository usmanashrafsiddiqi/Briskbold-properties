
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import { Contact } from "./components/Contact"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import ComingSoon from "./components/ComingSoon"
function App() {
 

  return (
    
    
<div className="w-full overflow-hidden">

  <Header/>
<Projects/>
<ComingSoon/>
  <About/>
<Testimonials/>
<Contact/>
<Footer/>

</div>
    

    
  )
}

export default App
