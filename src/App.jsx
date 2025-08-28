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
import InstagramInfluencerResearch from "./pages/InstagramInfluencerResearch";
import YouTubeInfluencerResearch from "./pages/YouTubeInfluencerResearch";
import TiktokInfluencerResearch from "./pages/TiktokInfluencerResearch";
import DataEntry from "./pages/DataEntry";
import CRMDataEntry from "./pages/CRMDataEntry";
import DataCleaning from "./pages/DataCleaning";
import DataExtraction from "./pages/DataExtraction";
import WebScrapingPage from "./pages/WebScrapingPage";
import DataCleaningExtraction from "./pages/DataCleaningExtraction";
import PythonScraping from "./pages/PythonScraping";
import PythonWebScraping from "./pages/PythonWebScraping";
import DataCleaningExport from "./pages/DataCleaningExport";
import SEOPage from "./pages/SEOPage";
import ONPageSEO from "./pages/ONPageSEO";
import OffPageSEO from "./pages/OffPageSEO";
import TechnicalSeo from "./pages/TechnicalSeo";
import LocalSeoo from "./pages/LocalSeoo";
import WebDevelopment from "./pages/WebDevelopment";
import FrontEndDevelopment from "./pages/FrontEndDevelopment";
import BackEndDevelopment from "./pages/BackEndDevelopment";
import Portfolio from "./pages/Portfolio";

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
        <Route path="/portfolio" element={<Portfolio />} />

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
        <Route path="/services/InstagramInfluencerResearch" element={<InstagramInfluencerResearch />} />
        <Route path="/services/YouTubeInfluencerResearch" element={<YouTubeInfluencerResearch />} />
        <Route path="/services/TiktokInfluencerResearch" element={<TiktokInfluencerResearch />} />
        <Route path="/services/DataEntry" element={<DataEntry />} />
        <Route path="/services/CRMDataEntry" element={<CRMDataEntry />} />
        <Route path="/services/DataCleaning" element={<DataCleaning />} />
        <Route path="/services/DataExtraction" element={<DataExtraction />} />
        <Route path="/services/WebScrapingPage" element={<WebScrapingPage />} />
        <Route path="/services/DataCleaningExtraction" element={<DataCleaningExtraction />} />
        <Route path="/services/PythonScraping" element={<PythonScraping />} />
        <Route path="/services/PythonWebScraping" element={<PythonWebScraping />} />
        <Route path="/services/DataCleaningExport" element={<DataCleaningExport />} />
        <Route path="/services/SEOPage" element={<SEOPage />} />
        <Route path="/services/ONPageSEO" element={<ONPageSEO />} />
        <Route path="/services/OffPageSEO" element={<OffPageSEO />} />
        <Route path="/services/TechnicalSeo" element={<TechnicalSeo />} />
        <Route path="/services/LocalSeoo" element={<LocalSeoo />} />
        <Route path="/services/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/services/FrontEndDevelopment" element={<FrontEndDevelopment />} />
        <Route path="/services/BackEndDevelopment" element={<BackEndDevelopment />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
