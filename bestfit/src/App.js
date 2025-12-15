import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicescard from "./components/Servicescard11/Servicescard.js";
import AboutUs from "./components/AboutUs";
import Specialities from "./components/Specialities";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from './components/Services';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="about-section">
                <h1>About Diet</h1>
                <p>
BestFit Health is committed to providing world-class healthcare services with compassionate care. Our team of expert doctors and specialists ensures you receive the best treatment tailored to your needs. We focus on quality, trust, and patient satisfaction.</p>
              </div>
              <Servicescard/>
              <Specialities />
              <Testimonials />
              <Blog />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> {/* Agar Contact component hai */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
