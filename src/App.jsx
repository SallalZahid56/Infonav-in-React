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
import ServicesPage from "./pages/ServicesPage";
import LeadGeneration from "./pages/LeadGeneration"; // ✅ Add this import
import B2BLeadGeneration from "./pages/B2BLeadGeneration"; // ✅ Add this import
import EmailListBuilding from "./pages/EmailListBuilding";
import LinkedInList from "./pages/LinkedInList";
import EmailMarketing from "./pages/EmailMarketing";
import InternetResearch from "./pages/InternetResearch";
import MarketResearch from "./pages/MarketResearch";
import DataVerificationPage from "./pages/DataVerificationPage";
import InfluencerResearch from "./pages/InfluencerResearch";



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

        <Route path="/servicesPage" element={<ServicesPage />} />
        {/* ✅ New Lead Generation Page */}
        <Route path="/services/lead-generation" element={<LeadGeneration />} />

        <Route path="/services/B2BLeadGeneration" element={<B2BLeadGeneration />} />
        <Route path="/services/EmailListBuilding" element={<EmailListBuilding />} />
        <Route path="/services/LinkedInList" element={<LinkedInList />} />
        <Route path="/services/EmailMarketing" element={<EmailMarketing />} />
        <Route path="/services/InternetResearch" element={<InternetResearch />} />
        <Route path="/services/MarketResearch" element={<MarketResearch />} />
        <Route path="/services/DataVerificationPage" element={<DataVerificationPage />} />
        <Route path="/services/InfluencerResearch" element={<InfluencerResearch />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
