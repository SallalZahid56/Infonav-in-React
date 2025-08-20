import React from "react";
import heroPic from "../assets/heroPic.png"; // ✅ adjust path if needed

const Hero = () => {
  return (
    <section className="w-full bg-white pt-12">
      <div className="max-w-7xl mx-auto px-8 lg:px-20 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-snug text-gray-900">
            Trusted <span className="text-brandOrange">Digital Marketing</span>{" "}
            Agency
          </h1>

          <p className="font-sans text-gray-700 mt-6 text-lg">
            <span className="font-semibold text-brandOrange">InfoNav</span> is a Digital Marketing Agency that helps businesses boost online visibility, generate qualified B2B leads, and scale with smart automation. We specialize in <span className="font-semibold text-brandOrange"> Lead Generation, Python Scraping, SEO, and Web Development</span>  — delivering growth with precision.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#newsletter"
              className="bg-brandOrange text-white font-heading px-6 py-3 rounded-full shadow hover:bg-black transition flex items-center justify-center"
            >
              News Letter ⮕
            </a>
            <a
              href="#portfolio"
              className="bg-brandOrange text-white font-heading px-6 py-3 rounded-full shadow hover:bg-black transition flex items-center justify-center"
            >
              Our Portfolio ⮕
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src={heroPic}
            alt="Hero"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
