import { useState } from "react";
import Navbar from "./components/Navbar"; // ✅ correct path to your component
import Hero from "./components/Hero";
import Strategy from "./components/Strategy"
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Hero />
      <Strategy />
      <Services />
      <Tools />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
