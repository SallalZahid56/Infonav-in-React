import React from "react";

// ✅ Replace with actual tool logos
import hubspot from "../assets/hubspot.png";
import salesforce from "../assets/salesforce.png";
import linkedin from "../assets/linkedinn.png";
import excel from "../assets/excel.png";
import googleSheets from "../assets/googlesheets.jpeg";
import buzzsumo from "../assets/Buzzsumo-Logo.png";
import semrush from "../assets/semrush.png";
import ahrefs from "../assets/ahrefs.png";
import moz from "../assets/moz.png";
import python from "../assets/python.png";
import beautifulsoup from "../assets/beautifulsoup.jpg";
import scrapy from "../assets/scrapyy.png";
import wordpress from "../assets/wordpress.webp";
import shopify from "../assets/shopify.png";
import reactLogo from "../assets/react.png";

// ✅ Example tools (3 per service → total 24)
const tools = [
  hubspot, salesforce, linkedin,   // Lead Generation
  excel, googleSheets, hubspot,    // Data Entry
  linkedin, buzzsumo, excel,       // Influencer Research
  googleSheets, semrush, ahrefs,   // Internet Research
  python, scrapy, beautifulsoup,   // Data Extraction
  python, scrapy, beautifulsoup,   // Python Scraping
  semrush, ahrefs, moz,            // SEO
  wordpress, shopify, reactLogo,   // Web Development
];

const Tools = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
          Tools We <span className="text-brandOrange">Use</span>
        </h2>
        <p className="font-sans text-gray-600 mt-4 text-base">
          We empower <span className="font-semibold">SEO</span>, lead generation, 
          scraping, and web development with industry-leading tools.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
        {tools.map((tool, i) => (
          <img
            key={i}
            src={tool}
            alt={`Tool ${i}`}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Tools;
