import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Home page components
import Hero from "./components/Hero";
import Strategy from "./components/Strategy";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";

// ✅ About page
import AboutUs from "./pages/AboutUs"; // we'll create this in pages folder

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Strategy />
              <Services />
              <Tools />
              <WhyChooseUs />
              <Testimonials />
              <FAQ />
            </>
          }
        />

        {/* About Us Page */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
