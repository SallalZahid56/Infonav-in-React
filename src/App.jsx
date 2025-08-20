import { useState } from "react";
import Navbar from "./components/Navbar"; // ✅ correct path to your component
import Hero from "./components/Hero";
import Strategy from "./components/Strategy"

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Hero />
      <Strategy />
    </>
  );
}

export default App;
