import React from "react";

// ✅ Placeholder tool logos (replace with actual logos in /assets/tools/)
import hubspot from "../assets/hubspot.svg";
import salesforce from "../assets/hubspot.svg";
import linkedin from "../assets/hubspot.svg";
import excel from "../assets/hubspot.svg";
import googleSheets from "../assets/hubspot.svg";
import buzzsumo from "../assets/hubspot.svg";
import semrush from "../assets/hubspot.svg";
import ahrefs from "../assets/hubspot.svg";
import moz from "../assets/hubspot.svg";
import python from "../assets/hubspot.svg";
import beautifulsoup from "../assets/hubspot.svg";
import scrapy from "../assets/hubspot.svg";
import wordpress from "../assets/hubspot.svg";
import shopify from "../assets/hubspot.svg";
import reactLogo from "../assets/hubspot.svg";

const services = [
  {
    title: "Lead Generation",
    tools: [hubspot, salesforce, linkedin],
  },
  {
    title: "Data Entry",
    tools: [excel, googleSheets, hubspot],
  },
  {
    title: "Influencer Research",
    tools: [linkedin, buzzsumo, excel],
  },
  {
    title: "Internet Research",
    tools: [googleSheets, semrush, ahrefs],
  },
  {
    title: "Data Extraction",
    tools: [python, scrapy, beautifulsoup],
  },
  {
    title: "Python Scraping",
    tools: [python, scrapy, beautifulsoup],
  },
  {
    title: "SEO",
    tools: [semrush, ahrefs, moz],
  },
  {
    title: "Web Development",
    tools: [wordpress, shopify, reactLogo],
  },
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
          Powering our <span className="font-semibold">SEO</span>, lead
          generation, web development, and automation with industry-leading tools.
        </p>
      </div>

      {/* Services + Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-heading text-lg font-semibold text-gray-900 text-center mb-6">
              {service.title}
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {service.tools.map((tool, i) => (
                <img
                  key={i}
                  src={tool}
                  alt={`${service.title} tool ${i}`}
                  className="w-14 h-14 object-contain grayscale hover:grayscale-0 transition"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
