import { useState } from "react";
import Navbar from "./components/Navbar"; // ✅ correct path to your component
import Hero from "./components/Hero";
import Strategy from "./components/Strategy"
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Hero />
      <Strategy />
      <Services />
      <Testimonials />
    </>
  );
}

export default App;
